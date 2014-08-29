/** @jsx React.DOM */

var baseURL = "https://bugzilla.mozilla.org";

var bugURL = baseURL + "/show_bug.cgi?id=";
var attachURL = baseURL + "/attachment.cgi?id=";
var reviewURL = baseURL + "/page.cgi?id=splinter.html&bug=" // +"&attachment=" + attachId;

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

var TodoTabs = React.createClass({
  getInitialState: function() {
    return {
      tabs: this.props.tabs,
      active: 0
    };
  },
  render: function() {
    return <div className="tabs">
      <TabsNav tabs={this.state.tabs} active={this.state.active} onTabClick={this.handleTabClick}/>
      <TabsContent tabs={this.state.tabs} active={this.state.active}/>
      </div>;
  },
  handleTabClick: function(index) {
    this.setState({active: index})
  }
});

var TabsNav = React.createClass({
  render: function() {
    var active = this.props.active;
    var items = this.props.tabs.map(function(item, index) {
      return <a href="#" className={'tab ' + (active === index ? 'tab-selected' : '')}
                onClick={this.onClick.bind(this, index)}>{item.name}</a>;
    }.bind(this));
    return <div className="tab-head">{items}</div>;
  },
  onClick: function(index) {
    this.props.onTabClick(index);
  }
});

var TabsContent = React.createClass({
  render: function() {
    var panels = this.props.tabs.map(function(tab, index) {
      var list;
      switch(tab.type) {
        case "patches":
          list = <PatchList/>;
          break;
        case "flags":
          list = <RespondList/>;
          break;
        case "flags+reviews":
          list = <NagList/>;
          break;
        case "bugs":
        default:
          list = <BugList/>;
          break;
      }

      return <div className={'tab-content ' +
                  (this.props.active == index ? 'tab-content-selected' : '')}>
               {list}</div>;
    }.bind(this));

    return <div className="tab-body">{panels}</div>
  }
});


var BugList = React.createClass({
  getInitialState: function() {
    return {items: bugItems};
  },
  render: function() {
    var items = this.state.items.map(function(item) {
      return <div className="list-item"><BugItem bug={item.bug}/></div>;
    });
    return <div className="">{items}</div>
  },
  fetch: function() {
    this.setState({items: bugs});
  }
});

var NagList = React.createClass({
  getInitialState: function() {
    return {items: nagItems};
  },
  render: function() {
    var items = this.state.items.map(function(item) {
      var flags = item.flags.map(function(flag) {
        return <FlagItem flag={flag}/>;
      });
      var patches = item.attachments.map(function(patch) {
        return <PatchItem patch={patch}/>;
      });
      var requests = patches.concat(flags);

      return <div className="list-item"><BugItem bug={item.bug}/><div>{requests}</div></div>;
    });
    return <div className="">{items}</div>
  }
});

var RespondList = React.createClass({
  getInitialState: function() {
    return {items: flagItems};
  },
  render: function() {
    var items = this.state.items.map(function(item) {
      var flags = item.flags.map(function(flag) {
        return <FlagItem flag={flag}/>;
      });
      return <div className="list-item"><BugItem bug={item.bug}/><div>{flags}</div></div>;
    });
    return <div className="">{items}</div>
  }
});

var PatchList = React.createClass({
  getInitialState: function() {
    return {items: patchItems};
  },
  render: function() {
    var items = this.state.items.map(function(item) {
      var patches = item.attachments.map(function(patch) {
         return <PatchItem patch={patch}/>;
      });
      return <div className="list-item"><BugItem bug={item.bug}/><div>{patches}</div></div>;
    });
    return <div className="">{items}</div>
  },
  fetch: function() {
    this.setState({items: patches});
  }
});

var PatchItem = React.createClass({
  render: function() {
    var patch = this.props.patch;
    return <div>
      <a className="att-link" href={attachURL + patch.id} target="_blank"
        title={"patch by " + patch.name}>patch by {patch.name}
      </a>
      <span className="att-suffix">
        <span className="att-date timeago"
              title={patch.last_change_time}>
          {patch.last_change_time}
        </span>
      </span></div>;
  }
});

var FlagItem = React.createClass({
  render: function() {
    var flag = this.props.flag;
    return <div className="flag"><span className="flag-name">{flag.name}</span>
      <span className="flag-status">{flag.status}</span>
      <span className="flag-requestee">{flag.requestee}</span>
    </div>;
  }
});

var BugItem = React.createClass({
  render: function() {
    var bug = this.props.bug;
    return <div className="bug">
      <a className="bug-link" href={bugURL + bug.id}
         target="_blank" title={bug.status + " " + bug.id + "-" + bug.summary}>
         <span className="bug-id">{bug.id}</span>-
         <span className="full-bug bug-summary">{bug.summary}</span>
      </a>
      <span className="item-date timeago"
            title="{bug.last_change_time}">{bug.last_change_time}</span>
    </div>
  }
});
