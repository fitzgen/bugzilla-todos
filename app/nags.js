$(function() {
  window.Nags = function() {
    this.items = [];
    _.extend(this, Backbone.Events);
  }
  Nags.prototype = {
    fetch: function() {
      MyReviews.user.awaitingReview(function(err, requests) {
        if (err) throw err;
        this.reset(requests);
      }.bind(this));
    },

    reset: function(items) {
      this.items = items;
      this.trigger("reset", items);
    }
  }

  function NagRow(patch) {
    this.patch = patch;
    this.el = $("<div/>");
    this.el.addClass("nag-item")
  }
  NagRow.prototype = {
    template: Handlebars.compile($("#nag-item").html()),
    render: function() {
      $(this.el).html(this.template(this.patch));
      return this;
    }
  }

  window.NagList = function(collection) {
    this.collection = collection;

    collection.on("add", this.addRow, this);
    collection.on("reset", this.render, this);
  }
  NagList.prototype = {
    el: $("#nag"),
    list: $("#nag-list"),

    render: function() {
      this.list.empty();

      this.collection.items.forEach(function(item) {
        this.addRow(item);
      }.bind(this));

      var tally = this.collection.items.length;
      this.el.find(".tally").html(tally);
      $(".timeago").timeago();
    },

    addRow: function(patch) {
      var view = new NagRow(patch);
      this.list.append(view.render().el);
    }
  }
})