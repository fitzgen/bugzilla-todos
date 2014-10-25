/** @jsx React.DOM */

var TodosModel = {
  get email() {
    return localStorage['bzhome-email'];
  },

  set email(address) {
    localStorage["bzhome-email"] = address;
  },

  get selectedTab() {
    return localStorage['bztodos-selected-tab'];
  },

  set selectedTab(id) {
    localStorage['bztodos-selected-tab'] = id;
  }
}

var TodosApp = React.createClass({
  handleLoginSubmit: function(email) {
    if (!email || email == TodosModel.email) {
      return;
    }
    this.setUser(email);
  },

  getInitialState: function() {
    return {
      data: {review: {}, checkin: {}, nag: {}, respond: {}, fix: {}}
    };
  },

  componentDidMount: function() {
    this.loadUser();

    setInterval(this.update, this.props.pollInterval);
  },

  loadUser: function() {
    // first see if the user is specified in the url
    var email = utils.queryFromUrl()['email'];
    if (!email) {
      email = utils.queryFromUrl()['user'];
    }
    // if not, fetch the last user from storage
    if (!email) {
      email = TodosModel.email;
      if (!email) {
        $("#login-container").addClass("was-logged-out");
        return;
      }
    }
    this.setUser(email);
  },

  setUser: function(email) {
    this.user = new User(email);

    TodosModel.email = email;

    $("#login-container").addClass("logged-in");
    $("#login-name").val(email);

    this.update();
  },

  update: function() {
    // refresh lists
    this.user.fetchTodos(function(data) {
      var count = this.markNew(data);
      this.updateTitle(count);

      this.setState({data: data});
    }.bind(this));
  },

  /**
   * Mark which items in the fetched data are new since last time.
   * We need this to display the count of new items in the tab title
   * and favicon, and to visually highlight the new items in the list.
   */
  markNew: function(newData) {
    var oldData = this.state.data;
    var totalNew = 0; // number of new non-seen items

    for (var id in newData) {
      var newList = newData[id].items;
      var oldList = oldData[id].items;
      var newCount = 0;

      if (!newList || !oldList) {
        continue;
      }
      for (var i in newList) {
        // try to find this item in the old list
        var newItem = newList[i];
        var oldItem = null;
        for (var j in oldList) {
          if (newItem.bug.id == oldList[j].bug.id) {
            oldItem = oldList[j];
            break;
          }
        }
        // mark as new if there was no match in the old list, or
        // there is, but that item hasn't been seen yet by the user.
        var isNew = !oldItem || oldItem.new;
        if (isNew) {
          newCount++;
          totalNew++;
        }
        newItem.new = isNew;
      }
      // cache the count of new items for easy fetching
      newData[id].newCount = newCount;
      console.log("new count:", newCount);
    }

    return totalNew;
  },

  /**
   * Update the page title to reflect the number of updates.
   */
  updateTitle: function(updateCount) {
    var title = document.title;
    title = title.replace(/\(\w+\) /, "");

    // update title with the number of new requests
    if (updateCount) {
      title = "(" + updateCount + ") " + title;
    }
    document.title = title;

    // update favicon too
    Tinycon.setBubble(updateCount);
  },

  render: function() {
    return (
      <div>
        <TodosLogin onLoginSubmit={this.handleLoginSubmit}/>
        <TodoTabs tabs={tabs} data={this.state.data}/>
      </div>
    );
  }
});

var TodosLogin = React.createClass({
  /**
   * Handle login form submission. We're using a form here so we can take
   * advantage of the browser's native autocomplete for remembering emails.
   */
  handleSubmit: function(e) {
    e.preventDefault();

    // Update the app for the new user
    var email = this.refs.email.getDOMNode().value.trim();
    this.props.onLoginSubmit(email);

    // From http://stackoverflow.com/questions/8400269/browser-native-autocomplete-for-ajaxed-forms */
    var iFrameWindow = document.getElementById("submit-iframe").contentWindow;
    var cloned = document.getElementById("login-form").cloneNode(true);
    iFrameWindow.document.body.appendChild(cloned);
    var frameForm = iFrameWindow.document.getElementById("login-form");
    frameForm.onsubmit = null;
    frameForm.submit();
    return false;
  },

  componentDidMount: function() {
    var input = $(this.refs.email.getDOMNode());

    input.val(TodosModel.email);

    input.click(function(){
      this.select();
    });

    // clicking outside of the login should change the user
    input.blur(function() {
      $("#login-form").submit();
    });
    // React won't catch the submission fired from the blur handler
    $("#login-form").submit(this.handleSubmit);
  },

  render: function() {
    return (
      <div id="login-container">
        <span id="title">
          <img id="bug-icon" src="lib/bugzilla.png" title="Bugzilla"></img>
           Todos
        </span>
        <span id="login"> for
          <form id="login-form" onSubmit={this.handleSubmit}>
            <input id="login-name"
                   name="email" placeholder="Enter Bugzilla user..."
                   ref="email"/>
          </form>
        </span>
      </div>
    );
  }
})

$(document).ready(function() {
  React.renderComponent(<TodosApp pollInterval={1000 * 60 * 10}/>, document.getElementById("content"))
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
