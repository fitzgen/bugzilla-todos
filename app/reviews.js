function Reviews() {}
Reviews.prototype = new Queue();
Reviews.prototype.fetch = function() {
  MyReviews.user.requests(function(err, requests) {
    if (err) throw err;
    this.reset(requests);
  }.bind(this));
  this.trigger("fetch");
}

function ReviewList() {}
ReviewList.prototype = new QueueList();
ReviewList.prototype.type = "review";
ReviewList.prototype.emptyMessage = "Nothing to review!";