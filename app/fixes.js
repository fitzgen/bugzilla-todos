function Fixes() {}
Fixes.prototype = new Queue();
Fixes.prototype.fetch = function() {
  MyReviews.user.needsPatch(function(err, bugs) {
    if (err) throw err;
    this.reset(bugs);
  }.bind(this));
  this.trigger("fetch");
}

function FixList() {}
FixList.prototype = new QueueList();
FixList.prototype.type = "fix";
FixList.prototype.emptyMessage = "No bugs to fix, go assign yourself some more!";