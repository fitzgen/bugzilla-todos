$(function() {
  window.Checkins = function() {
    this.items = [];
    _.extend(this, Backbone.Events);
  }
  Checkins.prototype = {
    fetch: function() {
      MyReviews.user.needsCheckin(function(err, requests) {
        if (err) throw err;
        this.reset(requests);
      }.bind(this));
    },

    reset: function(items) {
      this.items = items;
      this.trigger("reset", items);
    }
  }

  function CheckinRow(patch) {
    this.patch = patch;
    this.el = $("<div/>");
    this.el.addClass("list-item checkin-item")
  }
  CheckinRow.prototype = {
    template: Handlebars.compile($("#checkin-item").html()),
    render: function() {
      $(this.el).html(this.template(this.patch));
      return this;
    }
  }

  window.CheckinList = function(collection) {
    this.collection = collection;

    collection.on("add", this.addRow, this);
    collection.on("reset", this.render, this);
  }
  CheckinList.prototype = {
    list: $("#checkin-list"),

    render: function() {
      this.list.empty();

      this.collection.items.forEach(function(item) {
        this.addRow(item);
      }.bind(this));

      var tally = this.collection.items.length;
      $("#checkin-tab").find(".tally").html(tally);
      $(".timeago").timeago();
    },

    addRow: function(patch) {
      var view = new CheckinRow(patch);
      this.list.append(view.render().el);
    }
  }
})