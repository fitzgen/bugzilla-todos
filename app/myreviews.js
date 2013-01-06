$(document).ready(function() {
  MyReviews.initialize();
  MyReviews.loadUser();
  MyReviews.spinner($("#all-reviews-list"));
});

var MyReviews = {
  base: "https://bugzilla.mozilla.org",

  get email() {
    return localStorage['bzhome-email'];
  },

  set email(address) {
    localStorage["bzhome-email"] = address;
  },

  initialize: function() {
    this.reviewQueue = new Reviews();
    this.reviewlist = new ReviewList(this.reviewQueue);

    this.checkinQueue = new Checkins();
    this.checkinlist = new CheckinList(this.checkinQueue);

    var input = $("#login-name");
    input.val(this.email);
    input.blur(function() {
      var email = input.val();
      if (email) {
        this.setUser(email);
      }
    }.bind(this));

    $("#login-form").submit(function(event) {
      // when the user presses "Enter" in login input
      event.preventDefault();
      input.blur();
    });
  },

  setUser: function(email) {
    this.email = email;
    this.user = new User(email);

    this.update();
    $("#content").show();
  },

  loadUser: function() {
    email = utils.queryFromUrl()['user'];
    if (!email) {
      email = this.email; // from localStorage
      if (!email) {
        $("#login-name").addClass("logged-out");
        $("#content").hide();
        return false;
      }
    }
    $("#login-name").removeClass("logged-out");
    this.setUser(this.email);
  },

  update: function() {
    if (this.user) {
      this.reviewQueue.fetch();
      this.checkinQueue.fetch();
    }
  },

  spinner : function(elem, inline) {
    var spinner = $("<img src='lib/indicator.gif' class='spinner'></img>");
    if (inline) {
      spinner.css({display: 'inline'});
    }
    elem.append(spinner);
  }
};
