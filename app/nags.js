function Nags() {}
Nags.prototype = new Queue();
Nags.prototype.fetch = function() {
  MyReviews.user.awaitingReview(function(err, requests) {
    if (err) throw err;
    this.reset(requests);
  }.bind(this));
  this.trigger("fetch");
}

function NagList() {}
NagList.prototype = new QueueList();
NagList.prototype.type = "nag";
NagList.prototype.emptyMessage = "All your patches have been reviewed!";