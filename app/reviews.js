function Reviews() {}
Reviews.prototype = new Queue();
Reviews.prototype.fetch = function() {
  var self = this;
  MyReviews.user.requests(function(err, requests) {
  	try {
    if (err) throw err;
    self.reset(requests);
    } catch(e) {
    	log(e);
    }
  });
  this.trigger("fetch");
}

function ReviewList() {}
ReviewList.prototype = new QueueList();
ReviewList.prototype.type = "review";
ReviewList.prototype.emptyMessage = "Nothing to review!";