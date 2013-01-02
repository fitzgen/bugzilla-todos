function User(username, limit) {
   this.username = username;
   this.limit = limit;

   this.client = bz.createClient({
      username: username
   });
}

User.prototype = {
   fields : 'id,summary,status,resolution,last_change_time'
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

User.prototype.component = function(product, component, callback) {
   this.client.searchBugs({
      product: product,
      component: component,
      include_fields: this.fields,
      limit: this.limit,
      order: "changeddate DESC",
   }, callback);
}

User.prototype.reviews = function(callback) {
  this.requests(function(requests) {
    callback(requests.reviews);
  });
}

User.prototype.requests = function(callback) {
   var name = this.username.replace(/@.+/, ""), // can't get full email if not logged in
       superReviews = [],
       reviews = [],
       feedbacks = [],
       all = [];

   this.client.searchBugs({
      'field0-0-0': 'flag.requestee',
      'type0-0-0': 'equals',
      'value0-0-0': this.username,
      include_fields: 'id,summary,status,resolution,last_change_time,attachments'
   },
   function(err, bugs) {
      if (err) {
         return callback(err);
      }

      bugs.forEach(function(bug) {
         // only add attachments with this user as requestee
         bug.attachments.forEach(function(att) {
            if (att.is_obsolete || !att.flags) {
               return;
            }
            att.flags.forEach(function(flag) {
               if (flag.requestee && flag.requestee.name == name
                   && flag.status == "?") {
                  var request = {
                     type: flag.name,
                     flag: flag,
                     attachment: att,
                     bug: bug,
                     time: att.last_change_time
                  };

                  if (flag.name == "superreview") {
                     superReviews.push(request);
                  }
                  if (flag.name == "review") {
                     reviews.push(request);
                  }
                  else if (flag.name == "feedback") {
                     feedbacks.push(request);
                  }
                  all.push(request);
               }
            });
         });
      });

      superReviews.sort(utils.byTime);
      reviews.sort(utils.byTime);
      feedbacks.sort(utils.byTime);
      all.sort(utils.byTime);

      callback(null, {
         superReviews: superReviews,
         reviews: reviews,
         feedbacks: feedbacks,
         all: all
      });
   });
}
