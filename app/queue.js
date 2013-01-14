function Queue() {
  this.items = [];
  _.extend(this, Backbone.Events);
}
Queue.prototype = {
  fetch: function() {
    this.trigger("fetch");
  },

  reset: function(items) {
    this.items = items;
    this.trigger("reset", items);
  }
}

function QueueRow(item, type) {
  this.item = item;
  this.el = $("<div/>");
  this.el.addClass("list-item " + type + "-item");

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
    collection.on("fetch", this.showSpinner, this);

    // this.type is defined by subclasses
    this.list = $("#" + this.type + "-list");
  },

  render: function() {
    this.list.empty();

    this.collection.items.forEach(function(item) {
      this.addRow(item);
    }.bind(this));

    if (!this.collection.items.length) {
      this.showEmpty();
    }

    var tally = this.collection.items.length;
    this.showTally(tally);
    $(".timeago").timeago();
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

  showTally: function(tally) {
    $("#" + this.type + "-tab").find(".tally").html(tally);
  },

  showSpinner: function() {
    // clear any previous list
    this.list.empty();
    this.showTally("");

    var item = $("<div class='list-item'></div>");
    var spinner = $("<img src='lib/indicator.gif' class='spinner'></img>");
    item.append(spinner);
    this.list.append(item);
  }
}