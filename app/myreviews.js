$(document).ready(function() {
  MyReviews.initialize();
  MyReviews.loadUser();
  MyReviews.populate();
});

var MyReviews = {
  base: "https://bugzilla.mozilla.org",

  get email() {
   return localStorage['bzhome-email'];
  },

  set email(address) {
   localStorage["bzhome-email"] = address;
   this.populate();
  },

  initialize: function() {
    $("#login-name").val(this.email);
    $("#login-name").blur(function() {
      var email = input.val();
      if (email) {
         this.email = email;
      }
    });

    $("#login-form").submit(function(event) {
      // when the user presses "Enter" in login input
      event.preventDefault();
      input.blur();
    });
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
    this.user = new User(email);

    $("#content").show();
  },

  populate: function() {
    var reviewQueue = new Reviews();
    var reviewlist = new ReviewList(reviewQueue);

    reviewQueue.fetch();
  },

  spinner : function(elem, inline) {
    var spinner = $("<img src='lib/indicator.gif' class='spinner'></img>");
    if (inline) {
      spinner.css({display: 'inline'});
    }
    elem.append(spinner);
  },

  isOpen : function(bug) {
    return bzhome.closedStatus.indexOf(bug.status) < 0
  }
};
