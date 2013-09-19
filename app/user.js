/* -*- Mode: javascript; tab-width: 3; indent-tabs-mode: nil; c-basic-offset: 3; js-indent-level: 3; -*- */
function User(username, limit) {
   this.username = username;
   this.name = this.username.replace(/@.+/, "");
   this.limit = limit;

   this.client = bz.createClient({
      username: username
   });
}

User.prototype = {
   fields : 'id,summary,status,resolution,last_change_time'
}

User.prototype.component = function(product, component, callback) {
   this.client.searchBugs({
      product: product,
      component: component,
      include_fields: this.fields,
      limit: this.limit,
      order: "changeddate DESC",
   }, callback);
}

User.prototype.bugs = function(methods, callback) {
   var query = {
      email1: this.username,
      email1_type: "equals",
      order: "changeddate DESC",
      limit: this.limit,
      include_fields: this.fields
   };

   if (methods.indexOf('cced') >= 0) {
      query['email1_cc'] = 1;
   }
   if (methods.indexOf('assigned') >= 0) {
      query['email1_assigned_to'] = 1;
   }
   if (methods.indexOf('reporter') >= 0) {
      query['email1_reporter'] = 1;
   }
   this.client.searchBugs(query, callback);
}

User.prototype.requests = function(callback) {
   var name = this.name;

   this.client.searchBugs({
      'field0-0-0': 'flag.requestee',
      'type0-0-0': 'contains',
      'value0-0-0': this.username,
      status: ['NEW','UNCONFIRMED','REOPENED', 'ASSIGNED'],
      include_fields: 'id,summary,status,resolution,last_change_time,attachments'
   },
   function(err, bugs) {
      if (err) {
         return callback(err);
      }

      var requests = [];

      bugs.forEach(function(bug) {
         // only add attachments with this user as requestee
         if (!bug.attachments) {
            return;
         }
         /* group attachments together for this bug */
         var atts = [];
         bug.attachments.forEach(function(att) {
            if (att.is_obsolete || !att.flags) {
               return;
            }
            att.flags.some(function(flag) {
               if (flag.requestee && flag.requestee.name == name
                   && flag.status == "?") {
                  att.bug = bug;
                  att.type = flag.name;
                  att.time = att.last_change_time;
                  atts.push(att);
                  return true;
               }
               return false;
            });
         });

         if (atts.length) {
            requests.push({
               bug: bug,
               attachments: atts,
               time: atts[0].last_change_time
            })
         }
      });
      requests.sort(utils.byTime);

      callback(null, requests);
   });
}

User.prototype.needsCheckin = function(callback) {
   var name = this.name;

   this.client.searchBugs({
      'field0-0-0': 'attachment.attacher',
      'type0-0-0': 'equals',
      'value0-0-0': this.username,
      'field0-1-0': 'whiteboard',
      'type0-1-0': 'not_contains',
      'value0-1-0': 'fixed',
      'field0-2-0': 'flagtypes.name',
      'type0-2-0': 'substring',
      'value0-2-0': 'review+',
      status: ['NEW','UNCONFIRMED','REOPENED', 'ASSIGNED'],
      include_fields: 'id,summary,status,resolution,last_change_time,attachments'
   },
   function(err, bugs) {
      if (err) { return callback(err); }

      var requests = [];

      function readyToLand(att) {
         if (att.is_obsolete || !att.is_patch || !att.flags
             || att.attacher.name != name) {
            return false;
         }

         // Do we have at least one review+?
         var ready = att.flags.filter(function(flag) {
            return flag.name == "review" && flag.status == "+";
         }).length > 0;

         if (!ready)
            return false;

         // Don't add patches that have pending requests, have review-, or have
         // checkin+.
         for (var i = 0; i < att.flags.length; ++i) {
            var flag = att.flags[i];
            if (flag.status == "?" && flag.name != "checkin"
                || flag.name == "review" && flag.status == "-"
                || flag.name == "checkin" && flag.status == "+") {
               return false;
            }
         }

         return ready;
      }

      bugs.forEach(function(bug) {
         var atts = [];
         bug.attachments.forEach(function(att) {
            if (!readyToLand(att)) {
               return;
            }
            att.bug = bug;
            atts.push(att);
         });

         if (atts.length) {
            requests.push({
               bug: bug,
               attachments: atts,
               time: atts[0].last_change_time
            })
         }
      });
      requests.sort(utils.byTime);

      callback(null, requests);
  });
}

/**
 * All the patches and bugs the user is awaiting action on
 * (aka they have a outstanding flag request)
 */
User.prototype.awaitingFlag = function(callback) {
   var name = this.name;

   this.client.searchBugs({
      'field0-0-0': 'flag.setter',
      'type0-0-0': 'equals',
      'value0-0-0': this.username,
      'field0-0-1': 'attachment.attacher',
      'type0-0-1': 'equals',
      'value0-0-1': this.username,
      'field0-1-0': 'flagtypes.name',
      'type0-1-0': 'contains',
      'value0-1-0': '?',
      status: ['NEW','UNCONFIRMED','REOPENED', 'ASSIGNED'],
      include_fields: 'id,summary,status,resolution,last_change_time,flags,attachments'
   }, function(err, bugs) {
      var requests = [];

      bugs.forEach(function(bug) {
         var atts = [];
         var flags = [];

         if (bug.flags) {
            bug.flags.forEach(function(flag) {
               if (flag.status == "?" && flag.setter
                   && flag.setter.name == name
                   && (!flag.requestee || flag.requestee.name != name)
                   && flag.name != "in-testsuite") {
                  flags.push(flag);
               }
            });
         }
         if (bug.attachments) {
            bug.attachments.forEach(function(att) {
               if (att.is_obsolete || !att.flags) {
                  return;
               }

               att.flags.some(function(flag) {
                  if (flag.status == "?" && flag.setter.name == name) {
                     att.bug = bug;
                     atts.push(att);
                     return true;
                  }
                  return false;
               })
            });
         }

         if (atts.length || flags.length) {
            requests.push({
               bug: bug,
               attachments: atts,
               flags: flags,
               time: bug.last_change_time
            });
         }
      })
      requests.sort(utils.byTime);

      callback(null, requests);
   })
}

User.prototype.toFix = function(callback) {
   var query = {
      email1: this.username,
      email1_type: "equals",
      email1_assigned_to: 1,
      'field0-1-0': 'whiteboard',
      'type0-1-0': 'not_contains',
      'value0-1-0': 'fixed',
      order: "changeddate DESC",
      status: ['NEW','UNCONFIRMED','REOPENED', 'ASSIGNED'],
      include_fields: 'id,summary,status,resolution,last_change_time,attachments,depends_on'
   };
   var self = this;
   this.client.searchBugs(query, function(err, bugs) {
      if (err) { return callback(err); }

      var bugsToFix = bugs.filter(function(bug) {
         if (!bug.attachments) {
            return true;
         }

         var patchForReview = bug.attachments.some(function(att) {
            if (att.is_obsolete || !att.is_patch || !att.flags) {
               return false;
            }
            var reviewFlag = att.flags.some(function(flag) {
               return flag.name == "review" && (flag.status == "?" ||
                      flag.status == "+");
            });
            return reviewFlag;
         });
         return !patchForReview;
      });

      self.fetchDeps(bugsToFix, function () {
         bugsToFix.sort(function (b1, b2) {
            return new Date(b2.last_change_time) - new Date(b1.last_change_time);
         });

         bugsToFix = bugsToFix.map(function(bug) {
            return { bug: bug };
         })
         callback(null, bugsToFix);
      });
   });
}

// Fetch all of each bugs dependencies and modify in place each bug's depends_on
// array so that it only contains OPEN bugs that it depends on.
User.prototype.fetchDeps = function(bugs, callback) {
   // The number of bug requests we are waiting on.
   var waiting = 0;

   // Helper function to call the callback when we are no longer waiting for
   // anymore bug requests.
   function maybeFinish() {
      if (waiting) return;
      callback();
   }

   var self = this;
   bugs.forEach(function (bug) {
      if (!bug.depends_on) {
         return;
      }

      var oldDeps = bug.depends_on;
      bug.depends_on = [];
      oldDeps.forEach(function(dep) {
         waiting++;
         self.client.getBug(dep, function (err, depBug) {
            waiting--;
            try {
               if (err) return console.error("Error fetching bug " + dep);
               if (depBug.status === "RESOLVED") return;
               bug.depends_on.push(depBug);
            } finally {
               maybeFinish();
            }
         });
      });
   });

   maybeFinish();
};

User.prototype.flagged = function(callback) {
   var name = this.name;

   this.client.searchBugs({
      'field0-0-0': 'flag.requestee',
      'type0-0-0': 'equals',
      'value0-0-0': this.username,
      include_fields: 'id,summary,status,resolution,last_change_time,flags'
   },
   function(err, bugs) {
      if (err) { return callback(err); }
      var flags = [];
      bugs.forEach(function(bug) {
         if (!bug.flags) {
            return;
         }
         bug.flags.forEach(function(flag) {
            if (flag.requestee && flag.requestee.name == name) {
               flags.push({
                  name: flag.name,
                  flag: flag,
                  bug: bug,
                  time: bug.last_change_time
               })
            }
         });
      });
      flags.sort(function(f1, f2) {
         return new Date(f2.time) - new Date(f1.time);
      });

      callback(null, flags);
   });
}
