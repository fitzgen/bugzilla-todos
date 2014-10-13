/** @jsx React.DOM */

var TodosApp = React.createClass({
  handleLoginSubmit: function(email) {
    this.setUser(email);
  },

  setUser: function(email) {
    var user = new User(email);

    user.fetchTodos(function(data) {
      this.setState({data: data});
    }.bind(this));
  },

  getInitialState: function() {
    return {
      data: {
        review: [],
        checkin: [],
        nag: [],
        respond: [],
        fix: []
    }};
  },
  componentDidMount: function() {
    this.setUser("paul@mozilla.com");
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
  React.renderComponent(<TodosApp/>, document.getElementById("content"))
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

var bugItems = [
 {bug: {id: 23, status: "NEW", summary: "window is too small", last_change_time: "2 days ago"}},
 {bug: {id: 58, status: "REOP", summary: "window is too big", last_change_time: "6 days ago"}},
 {bug: {id: 19, status: "NEW", summary: "window is too medium", last_change_time: "3 months ago"}}
 ];

var patchItems = [
 {bug: {id: 23, summary: "window is too small", last_change_time: "2 days ago"},
  attachments: [{id: 400, name: "Joe"}, {id: 300, name: "Betty"}]},
 {bug: {id: 58, summary: "window is too big", last_change_time: "6 days ago"},
 attachments: [{id: 120, name: "Betty"}, {id: 230, name: "Chuck"}]}
];

var flagItems = [
 {bug: {id: 23, summary: "window is too small", last_change_time: "2 days ago"},
  flags: [{name: "needinfo", status: "?", requestee: "jill"},
          {name: "review", status: "?", requestee: "pravin"}]},
 {bug: {id: 58, summary: "window is too big", last_change_time: "6 days ago"},
 flags: [{name: "review", status: "?", requestee: "sam"}]}
];

var nagItems = [
 {bug: {id: 23, summary: "window is too small", last_change_time: "2 days ago"},
  flags: [{name: "needinfo", status: "?", requestee: "jill"},
          {name: "review", status: "?", requestee: "pravin"}],
  attachments: [{id: 120, name: "Sue"}]},
 {bug: {id: 58, summary: "window is too big", last_change_time: "6 days ago"},
 flags: [{name: "review", status: "?", requestee: "sam"}],
 attachments: []}
];

var data = {
  review: patchItems,
  checkin: patchItems,
  nag: nagItems,
  respond: flagItems,
  fix: bugItems
};
