$(document).ready(function() {
   /* save the user info to localStorage and populate data */
   bzhome.login();

   var input = $("#login-name");
   input.val(bzhome.email);
   input.blur(function() {
      var email = input.val();
      if (email && email != bzhome.email) {
         bzhome.login(email);
      }
   });

   $("#login-form").submit(function(event) {
      // when the user presses "Enter" in login input
      event.preventDefault();
      input.blur();
   });

   var reviewlist = new ReviewList;
   $("#content").hide();
});

var bzhome = {
   base: "https://bugzilla.mozilla.org",

   get email() {
      return localStorage['bzhome-email'];
   },

   login : function(email) {
      if (!email) {
         email = utils.queryFromUrl()['user'];
         if (!email) {
            email = bzhome.email; // in localStorage
            if (!email) {
               $("#login-name").addClass("logged-out");
               $("#content").hide();
               return;
            }
         }
      }
      $("#login-name").removeClass("logged-out");

      localStorage['bzhome-email'] = email;
      bzhome.user = new User(email, bzhome.bugLimit);

      reviews.fetch();
      $("#content").show();
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
