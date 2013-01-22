$(document).ready(function() {
  try {
    MyReviews.initialize();
    MyReviews.loadUser();
  }
  catch (e) {
    log(e);
  }
});

function log(err) {
  $("#error-message").html(JSON.stringify(err));
}

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
    input.click(function(){
      this.select();
    });
    input.blur(function() {
      $("#login-form").submit();
    });

    $("#login-form").submit(function(event) {
      try {
      // don't want to navigate page
      event.preventDefault();

      // when the user presses "Enter" in login input
      var email = input.val();
      if (email && email != MyReviews.email) {
        MyReviews.setUser(email);
      }
      } catch(e) {
        log(e);
      }
    });

    $(".tab").click(function(event) {
      var tab = $(event.target).closest("a");
      MyReviews.selectTab(tab.data("section"));
      return false;
    });

    this.selectTab("review");
    var queryTab = utils.queryFromUrl()['tab'];
    if (queryTab) {
      this.selectTab(queryTab);
    }

    $("#submit-iframe").hide();
  },

  setUser: function(email) {
    this.email = email;
    this.user = new User(email);

    $("#header").addClass("logged-in");
    $("#login-name").val(email);
    this.update();

    $("#content").show();
  },

  loadUser: function() {
    var email = utils.queryFromUrl()['user'];
    if (!email) {
      email = this.email; // from localStorage
      if (!email) {
        $("#header").addClass("was-logged-out");
        $("#content").hide();
        return false;
      }
    }
    this.setUser(email);
  },

  selectTab: function(type) {
    var tab = $("#" + type + "-tab");

    tab.siblings().removeClass("tab-selected");
    tab.addClass("tab-selected");

    /* Show the content for the section */
    tab.parents(".tabs").find("section").hide();
    $("#" + type).show();
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
