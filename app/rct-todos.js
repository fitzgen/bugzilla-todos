/** @jsx React.DOM */

var baseURL = "https://bugzilla.mozilla.org";

var bugURL = baseURL + "/show_bug.cgi?id=";
var attachURL = baseURL + "/attachment.cgi?id=";
var reviewURL = baseURL + "/page.cgi?id=splinter.html&bug=" // +"&attachment=" + attachId;


var TodoTabs = React.createClass({
  getInitialState: function() {
    return {
      tabs: this.props.tabs,
      active: 0
    };
  },
  render: function() {
    return <div id="todo-lists" className="tabs">
        <TabsNav tabs={this.state.tabs}
          active={this.state.active}
          onTabClick={this.handleTabClick}/>
        <TabsContent tabs={this.state.tabs}
          active={this.state.active}
          data={this.props.data}/>
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
      var data = this.props.data[tab.id];

      var list;
      switch(tab.type) {
        case "patches":
          list = <PatchList data={data}/>;
          break;
        case "flags":
          list = <RespondList data={data}/>;
          break;
        case "flags+reviews":
          list = <NagList data={data}/>;
          break;
        case "bugs":
        default:
          list = <BugList data={data}/>;
          break;
      }

      return <div className={'tab-content ' +
                  (this.props.active == index ? 'tab-content-selected' : '')}>
               {list}
             </div>;
    }.bind(this));

    return <div className="tab-body">{panels}</div>
  }
});

var BugList = React.createClass({
  getInitialState: function() {
    return null;
  },
  render: function() {
    var items = this.props.data.map(function(item) {
      return <div className="list-item"><BugItem bug={item.bug}/></div>;
    });
    return <div className="">{items}</div>
  }
});

var NagList = React.createClass({
  getInitialState: function() {
    return null;
  },
  render: function() {
    var items = this.props.data.map(function(item) {
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
    return null;
  },
  render: function() {
    var items = this.props.data.map(function(item) {
      var flags = item.bug.flags.map(function(flag) {
        return <FlagItem flag={flag}/>;
      });
      return <div className="list-item"><BugItem bug={item.bug}/><div>{flags}</div></div>;
    });
    return <div className="">{items}</div>
  }
});

var PatchList = React.createClass({
  getInitialState: function() {
    return null;
  },
  render: function() {
    var items = this.props.data.map(function(item) {
      var patches = item.attachments.map(function(patch) {
         return <PatchItem patch={patch}/>;
      });
      return <div className="list-item"><BugItem bug={item.bug}/><div>{patches}</div></div>;
    });
    return <div className="">{items}</div>
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
