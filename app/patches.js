function Patches() {}
Patches.prototype = new Queue();
Patches.prototype.fetch = function() {
  MyReviews.user.needsPatch(function(err, bugs) {
    if (err) throw err;
    this.reset(bugs);
  }.bind(this));
  this.trigger("fetch");
}

function PatchList() {}
PatchList.prototype = new QueueList();
PatchList.prototype.type = "patch";
PatchList.prototype.emptyMessage = "No bugs to fix, go assign yourself some more!";