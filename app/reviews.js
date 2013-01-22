function Reviews() {}
Reviews.prototype = new Queue();
Reviews.prototype.fetch = function() {
  var self = this;
  MyReviews.user.requests(function(err, requests) {
    if (err) throw err;
    self.reset(requests);
  });
  this.trigger("fetch");
}

function ReviewList() {}
ReviewList.prototype = new QueueList();
ReviewList.prototype.type = "review";
ReviewList.prototype.emptyMessage = "Nothing to review!";