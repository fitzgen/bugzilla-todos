$(document).ready(function() {
  MyReviews.initialize();
  MyReviews.loadUser();
});

Tinycon.setOptions({
  background: '#E530A4',
});

const fetchFrequency = 1000 * 60 * 1;  // every 20 minutes

var tabs = {
  review : {
    name: "To Review",
    alt: "Patches you have to review (key: r)"
  },
  checkin : {
    name: "To Check In",
    alt: "Patches by you, ready to check in (key: c)"
  },
  nag : {
    name: "To Nag",
    alt: "Patches by you, awaiting review (key: n)"
  },
  fix : {
    name: "To Fix",
    alt: "Bugs assigned to you (key: f)"
  },
  respond : {
    name: "To Respond",
    alt: "Bugs where you're a flag requestee (key: p)"
  }
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
    this.initTabs();
    this.initQueues();

    var input = $("#login-name");
    input.val(this.email);
    input.click(function(){
      this.select();
    });
    input.blur(function() {
      $("#login-form").submit();
    });

    $("#login-form").submit(function(event) {
      // don't want to navigate page
      event.preventDefault();

      var email = input.val();
      if (email && email != MyReviews.email) {
        MyReviews.setUser(email);
      }
    });

    $(".tab").click(function(event) {
      var tab = $(event.target).closest("a");
      MyReviews.selectTab(tab.data("section"));
      return false;
    });

    var storedTab;
    var queryTab = utils.queryFromUrl()['tab'];
    if (queryTab) {
      this.selectTab(queryTab);
    }
    else if(storedTab = localStorage['bztodos-selected-tab']) {
      this.selectTab(storedTab);
    }
    else {
      this.selectTab("review");
    }

    this.addKeyBindings();

    $("#submit-iframe").hide();
  },

  initTabs: function() {
    var tabTemplate = Handlebars.compile($("#tab-template").html());
    var bodyTemplate = Handlebars.compile($("#tab-body-template").html());

    for (var id in tabs) {
      var tab = tabs[id];
      tab.id = id;
      $(".tab-head").append(tabTemplate(tab));
      $(".tab-body").append(bodyTemplate(tab));
    }
  },

  initQueues: function() {
    var reviewQueue = new Reviews();
    var reviewlist = new ReviewList();
    reviewlist.initialize(reviewQueue);

    var checkinQueue = new Checkins();
    var checkinlist = new CheckinList(this.checkinQueue);
    checkinlist.initialize(checkinQueue);

    var nagQueue = new Nags();
    var naglist = new NagList(this.nagQueue);
    naglist.initialize(nagQueue);

    var fixQueue = new Fixes();
    var fixlist = new FixList(this.fixQueue);
    fixlist.initialize(fixQueue);

    var respondQueue = new Responds();
    var respondlist = new RespondList(this.respondQueue);
    respondlist.initialize(respondQueue);

    this.queues = {
      review: reviewQueue,
      checkin: checkinQueue,
      nag: nagQueue,
      fix: fixQueue,
      respond: respondQueue
    };

    for (var id in this.queues) {
      var queue = this.queues[id];
      queue.on("update-count-changed", this.updateTitle.bind(this));
    }
  },

  updateTitle: function() {
    var title = document.title;
    title = title.replace(/\(\w+\) /, "");

    var updates = 0;
    for (var id in this.queues) {
      updates += this.queues[id].updateCount;
    }

    // update title with the number of new requests
    if (updates) {
      title = "(" + updates + ") " + title;
    }
    document.title = title;

    // update favicon too
    Tinycon.setBubble(updates);
  },

  setUser: function(email) {
    this.email = email;
    this.user = new User(email);

    $("#header").addClass("logged-in");
    $("#login-name").val(email);
    this.populate();

    $("#content").show();
  },

  loadUser: function() {
    var email = utils.queryFromUrl()['email'];
    if (!email) {
      email = utils.queryFromUrl()['user'];
    }
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

  addKeyBindings: function() {
    var keys = {
      'r': 'review',
      'c': 'checkin',
      'n': 'nag',
      'f': 'fix',
      'p': 'respond'
    };

    $(document).keypress(function(e) {
      var tab = keys[String.fromCharCode(e.charCode)];
      if (tab) {
        this.selectTab(tab);
      }
    }.bind(this))
  },

  selectTab: function(type) {
    if (type == this.selectedTab) {
      return;
    }
    // mark previous tab's updates as "read"
    if (this.selectedTab) {
      this.queues[this.selectedTab].clearUpdates();
    }

    var tab = $("#" + type + "-tab");
    tab.siblings().removeClass("tab-selected");
    tab.addClass("tab-selected");

    /* Show the content for the section */
    tab.parents(".tabs").find("section").hide();
    $("#" + type).show();

    localStorage['bztodos-selected-tab'] = type;

    this.selectedTab = type;
  },

  populate: function() {
    clearInterval(this.intervalID);

    this.clearQueues();
    this.update();
    this.updateTitle();

    this.intervalID = setInterval(this.update.bind(this), fetchFrequency);
  },

  clearQueues: function() {
    for (var id in this.queues) {
      this.queues[id].newUser();
    }
  },

  update: function() {
    for (var id in this.queues) {
      this.queues[id].fetch();
    }
  }
};
