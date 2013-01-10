function Checkins() {}
Checkins.prototype = new Queue();
Checkins.prototype.fetch = function() {
  MyReviews.user.needsCheckin(function(err, requests) {
    if (err) throw err;
    this.reset(requests);
  }.bind(this));
  this.trigger("fetch");
}

function CheckinList() {}
CheckinList.prototype = new QueueList();
CheckinList.prototype.type = "checkin";
CheckinList.prototype.emptyMessage = "No patches to check in"