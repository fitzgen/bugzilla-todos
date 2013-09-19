function Fixes() {
  var storedVal = localStorage['bztodos-include-blocked-bugs'];
  var parsedVal;
  try {
    parsedVal = JSON.parse(storedVal);
  } catch(e) {
    // Never been saved to localStorage before, or bad value.
    parsedVal = true;
  }
  this.includeBlockedBugs = parsedVal;
}

Fixes.prototype = new Queue();

Fixes.prototype.filter = function (item) {
  if (!this.includeBlockedBugs && item.bug.depends_on) {
    return !item.bug.depends_on.length;
  }
  return true;
}

Fixes.prototype.fetch = function() {
  var self = this;
  MyReviews.user.toFix(function(err, bugs) {
    if (err) throw err;
    self.reset(bugs);
  });
  this.trigger("fetch");
}

function FixList() {}
FixList.prototype = new QueueList();
FixList.prototype.type = "fix";
FixList.prototype.emptyMessage = "No bugs to fix.";

FixList.prototype.initialize = function(collection, type) {
  QueueList.prototype.initialize.call(this, collection, type);

  this.checkbox = $("#include-blocked-bugs");
  this.checkbox.attr("checked", this.collection.includeBlockedBugs);
  this.checkbox.change(this._setIncludeBlockedBugs.bind(this));
};

FixList.prototype._setIncludeBlockedBugs = function(event) {
  var shouldInclude = event.target.checked;
  localStorage['bztodos-include-blocked-bugs'] = JSON.stringify(shouldInclude);
  this.collection.includeBlockedBugs = shouldInclude;
  this.render();
};
