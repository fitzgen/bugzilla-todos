$(document).ready(function() {
  MyReviews.initialize();
  MyReviews.loadUser();
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
    this.reviewlist = new ReviewList();
    this.reviewlist.initialize(this.reviewQueue);

    this.checkinQueue = new Checkins();
    this.checkinlist = new CheckinList(this.checkinQueue);
    this.checkinlist.initialize(this.checkinQueue);

    this.nagQueue = new Nags();
    this.naglist = new NagList(this.nagQueue);
    this.naglist.initialize(this.nagQueue);

    this.fixQueue = new Fixes();
    this.fixlist = new FixList(this.fixQueue);
    this.fixlist.initialize(this.fixQueue);

    this.respondQueue = new Responds();
    this.respondlist = new RespondList(this.respondQueue);
    this.respondlist.initialize(this.respondQueue);

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

    $(".tab").click(function(event) {
      var tab = $(event.target).closest("a");

      /* Select this tab */
      $(this).siblings().removeClass("tab-selected");
      tab.addClass("tab-selected");

      var section = tab.data("section");

      /* Show the content for the section */
      $(this).parents(".tabs").find("section").hide();
      $("#" + section).show();
      return false;
    })
    $("#review-tab").click();

    $("#patch").hide();
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
      this.nagQueue.fetch();
      this.fixQueue.fetch();
      this.respondQueue.fetch();
    }
  }
};
