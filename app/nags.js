function Nags() {}
Nags.prototype = new Queue();
Nags.prototype.fetch = function() {
  var self = this;

  MyReviews.user.awaiting(function(err, requests) {
    if (err) throw err;
    self.reset(requests);
  });
  this.trigger("fetch");
}

function NagList() {}
NagList.prototype = new QueueList();
NagList.prototype.type = "nag";
NagList.prototype.emptyMessage = "All your patches have been reviewed!";