/** @jsx React.DOM */

$(document).ready(function() {
  MyReviews.initialize();
  MyReviews.loadUser();
});

Tinycon.setOptions({
  background: '#E530A4',
});

var tabs = [
  { id: "review",
    name: "To Review",
    alt: "Patches you have to review (key: r)",
    type: "patches"
  },
  { id: "checkin",
    name: "To Check In",
    alt: "Patches by you, ready to check in (key: c)",
    type: "patches"
  },
  { id: "nag",
    name: "To Nag",
    alt: "Patches by you, awaiting review (key: n)",
    type: "flags+reviews"
  },
  { id: "respond",
    name: "To Respond",
    alt: "Bugs where you're a flag requestee (key: p)",
    type: "flags"
  },
  { id: "fix",
    name: "To Fix",
    alt: "Bugs assigned to you (key: f)",
    type: "bugs"
  }
];

const fetchFrequency = 1000 * 60 * 15;  // every 15 minutes

var tabsByIndex; // defined in initTabs

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

    // var storedTab;
    // var queryTab = utils.queryFromUrl()['tab'];
    // if (queryTab) {
    //   this.selectTab(queryTab);
    // }
    // else if(storedTab = localStorage['bztodos-selected-tab']) {
    //   this.selectTab(storedTab);
    // }
    // else {
    //   this.selectTab("review");
    // }

    // this.addKeyBindings();

    $("#submit-iframe").hide();
  },

  initTabs: function() {
    React.renderComponent(<TodoTabs tabs={tabs}/>, document.querySelector("#content"));
  },

  initQueues: function() {

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
      // Tabs
      'r': 'review',
      'c': 'checkin',
      'n': 'nag',
      'f': 'fix',
      'p': 'respond',
      // Navigation
      'h': 'selectPreviousTab',
      'j': 'nextItem',
      'k': 'previousItem',
      'l': 'selectNextTab',
      'v': 'viewItem'
    };

    $(document).keypress(function(e) {
      if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey
         || e.target.nodeName.toLowerCase() == "input") {
        return;
      }
      var action = keys[String.fromCharCode(e.charCode)];
      if (!action) {
        return;
      }
      if (action in tabs) {
        return void this.selectTab(action);
      }
      if (typeof this.queues[this.selectedTab][action] == "function") {
        return void this.queues[this.selectedTab][action]();
      }
      if (typeof this[action] == "function") {
        return void this[action]();
      }
    }.bind(this));

    // Tell the user what keybindings exist.
    var keyInfo = $("#key-info");
    var firstIteration = true;
    for (var key in keys) {
      if (firstIteration) {
        firstIteration = false;
      } else {
        keyInfo.append(", ");
      }
      keyInfo.append($("<code>").append(key));
    }
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

  selectNextTab: function() {
    return this._selectTabRelative(1);
  },

  selectPreviousTab: function() {
    return this._selectTabRelative(-1);
  },

  _selectTabRelative: function (offset) {
    var N = tabsByIndex.length;
    var tab = tabsByIndex[(tabs[this.selectedTab].index + offset + N) % N];
    return this.selectTab(tab.id);
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
