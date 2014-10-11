/** @jsx React.DOM */

var BugzillaTodosApp = React.createClass({
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
    var user = new User("paul@mozilla.com");

    user.fetchTodos(function(data) {
      console.log("fetched todos");
      this.setState({data: data});
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <h1>The App</h1>
        <TodoTabs tabs={tabs} data={this.state.data}/>
      </div>
    );
  }
});

$(document).ready(function() {
  React.renderComponent(<BugzillaTodosApp/>, document.getElementById("content"))
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
