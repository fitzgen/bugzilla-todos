function Queue() {
  this._items = [];
  this.activeItemIndex = 0;

  _.extend(this, Backbone.Events);
}
Queue.prototype = {
  get updateCount() {
    var count = 0;
    this.getItems().forEach(function (item) {
      if (item.new) {
        count++;
      }
    });
    return count;
  },

  newUser: function() {
    this._items = [];
    this.clearUpdates();

    this.shouldDiff = false;
    this.trigger("new-user");
  },

  reset: function(items) {
    // check for any new items
    var hasNew = false;
    if (this.shouldDiff) {
      hasNew = this.markNew(items);
    }
    else {
      this.shouldDiff = true;
    }

    this._items = items;
    this.trigger("reset", items);

    if (hasNew) {
      this.trigger("update-count-changed");
    }
  },

  markNew: function(items) {
    var hasNew = false;

    // mark new, un-seen items as such
    for (var i in items) {
      var newItem = items[i];

      // is it in the current set of items?
      var oldItem = null;
      for (var j in this._items) {
        if (this._items[j].bug.id == newItem.bug.id) {
          oldItem = this._items[j];
          break;
        }
      }
      newItem.new = !oldItem || oldItem.new;
      hasNew = hasNew || !oldItem;
    }

    return hasNew;
  },

  clearUpdates: function() {
    for (var i in this._items) {
      this._items[i].new = false;
    }
    this.trigger("update-count-changed");
    this.trigger("markers-cleared");
  },

  nextItem: function() {
    this.activeItemIndex = Math.min(this.activeItemIndex + 1, this.getItems().length - 1);
    this.trigger("activeItemIndexChanged", this.activeItemIndex);
  },

  previousItem: function() {
    this.activeItemIndex = Math.max(this.activeItemIndex - 1, 0);
    this.trigger("activeItemIndexChanged", this.activeItemIndex);
  },

  viewItem: function() {
    var item = this.getItems()[this.activeItemIndex];
    if (!item) {
      return;
    }
    window.open(MyReviews.base + "/show_bug.cgi?id=" + item.bug.id);
  },

  // Filter items from being iterated over in getItems. Meant to be overridden
  // by subclasses, should they so choose.
  filter: function(item) {
    return true;
  },

  getItems: function(cb) {
    return this._items.filter(this.filter.bind(this));
  }
}

function QueueRow(item, type) {
  this.item = item;
  this.el = $("<div/>");
  this.el.addClass("list-item " + type + "-item");

  if (item.new) {
    this.el.addClass("new-item");
  }

  this.template = Handlebars.compile($("#" + type + "-item").html());
}
QueueRow.prototype = {
  render: function() {
    $(this.el).html(this.template(this.item));
    return this;
  }
}

function QueueList() {}
QueueList.prototype = {
  initialize: function(collection, type) {
    this.collection = collection;

    collection.on("add", this.addRow, this);
    collection.on("reset", this.render, this);
    collection.on("new-user", this.showSpinner, this);
    collection.on("update-count-changed", this.updateTally, this);
    collection.on("markers-cleared", this.clearMarkers, this);
    collection.on("activeItemIndexChanged", this.activateItem, this);

    // this.type is defined by subclasses
    this.list = $("#" + this.type + "-list");
    this.tab = $("#" + this.type + "-tab");
  },

  render: function() {
    this.list.empty();

    var self = this;
    this.collection.getItems().forEach(function(item) {
      self.addRow(item);
    });

    if (!this.collection.getItems().length) {
      this.showEmpty();
    }
    this.updateTally();

    $(".timeago").timeago();
    this.activateItem(0);
  },

  showEmpty: function() {
    var item = $("<div class='list-item empty-message'></div>");
    item.text(this.emptyMessage);
    this.list.append(item);
  },

  addRow: function(item) {
    var view = new QueueRow(item, this.type);
    this.list.append(view.render().el);
  },

  updateTally: function(clear) {
    var tally = this.collection.getItems().length;
    if (clear) {
      tally = "";
    }
    $("#" + this.type + "-tab").find(".tally").html(tally);

    var addedText = "";
    if (this.collection.updateCount) {
      addedText = "+" + this.collection.updateCount;
    }
    $("#" + this.type + "-tab").find(".added-tally").html(addedText);
  },

  clearMarkers: function() {
    this.list.find(".list-item").removeClass("new-item");
  },

  activateItem: function(index) {
    this.list.find(".active-list-item").removeClass("active-list-item");
    // Add one because nth-of-type is 1 indexed.
    this.list.find(".list-item:nth-of-type(" + (index+1) + ")").addClass("active-list-item");
  },

  showSpinner: function() {
    // clear any previous list
    this.list.empty();
    this.updateTally(true);

    var item = $("<div class='list-item'></div>");
    var spinner = $("<img src='lib/indicator.gif' class='spinner'></img>");
    item.append(spinner);
    this.list.append(item);
  }
}
