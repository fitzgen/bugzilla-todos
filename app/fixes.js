function Fixes() {}
Fixes.prototype = new Queue();
Fixes.prototype.fetch = function() {
  var self = this;
  MyReviews.user.needsPatch(function(err, bugs) {
    if (err) throw err;
    self.reset(bugs);
  });
  this.trigger("fetch");
}

function FixList() {}
FixList.prototype = new QueueList();
FixList.prototype.type = "fix";
FixList.prototype.emptyMessage = "No bugs to fix.";