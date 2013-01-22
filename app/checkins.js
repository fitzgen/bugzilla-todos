function Checkins() {}
Checkins.prototype = new Queue();
Checkins.prototype.fetch = function() {
  var self = this;
  MyReviews.user.needsCheckin(function(err, requests) {
    if (err) throw err;
    self.reset(requests);
  });
  this.trigger("fetch");
}

function CheckinList() {}
CheckinList.prototype = new QueueList();
CheckinList.prototype.type = "checkin";
CheckinList.prototype.emptyMessage = "No patches of yours to check in."