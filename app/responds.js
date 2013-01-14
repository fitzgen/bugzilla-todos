function Responds() {}
Responds.prototype = new Queue();
Responds.prototype.fetch = function() {
  MyReviews.user.flagged(function(err, bugs) {
    if (err) throw err;
    this.reset(bugs);
  }.bind(this));
  this.trigger("fetch");
}

function RespondList() {}
RespondList.prototype = new QueueList();
RespondList.prototype.type = "respond";
RespondList.prototype.emptyMessage = "No flag requests.";