function Responds() {}
Responds.prototype = new Queue();
Responds.prototype.fetch = function() {
  var self = this;
  MyReviews.user.toRespond(function(err, bugs) {
    if (err) throw err;
    self.reset(bugs);
  });
  this.trigger("fetch");
}

function RespondList() {}
RespondList.prototype = new QueueList();
RespondList.prototype.type = "respond";
RespondList.prototype.emptyMessage = "No flag requests.";