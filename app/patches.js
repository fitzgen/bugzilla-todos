$(function() {
  window.Patches = function() {
    this.items = [];
    _.extend(this, Backbone.Events);
  }
  Patches.prototype = {
    fetch: function() {
      MyReviews.user.needsPatch(function(err, bugs) {
        if (err) throw err;
        this.reset(bugs);
      }.bind(this));
    },

    reset: function(items) {
      this.items = items;
      this.trigger("reset", items);
    }
  }

  function PatchRow(bug) {
    this.bug = bug;
    this.el = $("<div/>");
    this.el.addClass("list-item patch-item")
  }
  PatchRow.prototype = {
    template: Handlebars.compile($("#patch-item").html()),
    render: function() {
      $(this.el).html(this.template({
        bug: this.bug
      }));
      return this;
    }
  }

  window.PatchList = function(collection) {
    this.collection = collection;

    collection.on("add", this.addRow, this);
    collection.on("reset", this.render, this);
  }
  PatchList.prototype = {
    el: $("#patch"),
    list: $("#patch-list"),

    render: function() {
      this.list.empty();

      this.collection.items.forEach(function(item) {
        this.addRow(item);
      }.bind(this));

      var tally = this.collection.items.length;
      this.el.find(".tally").html(tally);
      $(".timeago").timeago();
    },

    addRow: function(bug) {
      var view = new PatchRow(bug);
      this.list.append(view.render().el);
    }
  }
})