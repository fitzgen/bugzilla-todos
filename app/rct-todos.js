/** @jsx React.DOM */

var tabs = [
  { id: "review",
    name: "Review",
  },
  { id: "checkin",
    name: "Check In"
  },
  { id: "nag",
    name: "Nag"
  },
  { id: "respond",
    name: "Respond"
  },
  { id: "fix",
    name: "Fix"
  }
]

var bugs = [
 {bug: {id: 23, summary: "window is too small", last_change_time: "2 days ago"}},
 {bug: {id: 58, summary: "window is too big", last_change_time: "6 days ago"}},
 {bug: {id: 19, summary: "window is too medium", last_change_time: "3 months ago"}}
 ];
var patches = [
 {bug: {id: 23, summary: "window is too small", last_change_time: "2 days ago"},
  attachments: [{id: 400, name: "Joe"}, {id: 300, name: "Betty"}]},
 {bug: {id: 58, summary: "window is too big", last_change_time: "6 days ago"},
 attachments: [{id: 120, name: "Betty"}, {id: 230, name: "Chuck"}]}
];
var flags = [
 {bug: {id: 23, summary: "window is too small", last_change_time: "2 days ago"},
  flags: [{name: "needinfo", requestee: "jill"}, {name: "review", name: "pravin"}]},
 {bug: {id: 58, summary: "window is too big", last_change_time: "6 days ago"},
 flags: [{name: "review", requestee: "sam"}]}
];

var TodoTabs = React.createClass({
  getInitialState: function() {
  return {
    tabs: tabs,
      active: 0
    };
  },
  render: function() {
    return <div>
      <TabsNav items={this.state.tabs} active={this.state.active} onTabClick={this.handleTabClick}/>
      <TabsContent items={this.state.tabs} active={this.state.active}/>
      </div>;
  },
  handleTabClick: function(index) {
    this.setState({active: index})
  }
});

var TabsNav = React.createClass({
  render: function() {
    var active = this.props.active;
  var items = this.props.items.map(function(item, index) {
    return <a href="#" className={'tab ' + (active === index ? 'tab-selected' : '')} onClick={this.onClick.bind(this, index)}>
         {item.name}
       </a>;
    }.bind(this));
    return <div>{items}</div>;
  },
  onClick: function(index) {
    this.props.onTabClick(index);
  }
});

var TabsContent = React.createClass({
  render: function() {
    var active = tabs[this.props.active].id;
    var content = <div>
      <div className={'tab-content ' + (active == "review" ? 'tab-content-selected' : '')}>
        <ReviewList/>
      </div>
      <div className={'tab-content ' + (active == "checkin" ? 'tab-content-selected' : '')}>
        <BugList/>
      </div>
      <div className={'tab-content ' + (active == "nag" ? 'tab-content-selected' : '')}>
        <ReviewList/>
      </div>
      <div className={'tab-content ' + (active == "respond" ? 'tab-content-selected' : '')}>
        <BugList/>
      </div>
      <div className={'tab-content ' + (active == "fix" ? 'tab-content-selected' : '')}>
        <ReviewList/>
      </div>
    </div>
    return content;
  }
});

var BugList = React.createClass({
  getInitialState: function() {
    return {items: bugs};
  },
  render: function() {
    var items = this.state.items.map(function(item) {
      var bug = item.bug;
      return <div><a href={bug.id} target="_blank" title={bug.summary}>
        {bug.id} - <span className="bug-summary">{bug.summary}</span>
        </a></div>;
    });
    return <div className="">{items}</div>
  },
  fetch: function() {
    this.setState({items: bugs});
  }
});

var ReviewList = React.createClass({
  getInitialState: function() {
    return {items: patches};
  },
  render: function() {
    var items = this.state.items.map(function(item) {
      var patches = item.attachments.map(function(patch) {
         return <div><a href={patch.id} target="_blank"> patch by {name}</a>
          <span>2 days ago</span></div>;
      });

      var bug = item.bug;
      return <div><div><a href={bug.id} target="_blank" title={bug.summary}>
        {bug.id} - <span className="bug-summary">{bug.summary}</span>
        </a></div><div>{patches}</div></div>;
    });
    return <div className="">{items}</div>
  },
  fetch: function() {
    this.setState({items: patches});
  }
});

React.renderComponent(<TodoTabs/>, document.querySelector("#content"));
