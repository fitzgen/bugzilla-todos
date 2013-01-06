$(function() {
  window.Reviews = function() {
    this.items = [];
    _.extend(this, Backbone.Events);
  }
  Reviews.prototype = {
    fetch: function() {
      MyReviews.user.requests(function(err, requests) {
        if (err) throw err;
        this.reset(requests);
      }.bind(this));
    },

    reset: function(items) {
      this.items = items;
      this.trigger("reset", items);
    }
  }

  function ReviewRow(review) {
    this.review = review;
    this.el = $("<div/>");
    this.el.addClass("review-item")
  }
  ReviewRow.prototype = {
    template: Handlebars.compile($("#review-item").html()),
    render: function() {
      $(this.el).html(this.template(this.review));
      return this;
    }
  }

  window.ReviewList = function(collection) {
    this.collection = collection;

    collection.on("add", this.addReview, this);
    collection.on("reset", this.render, this);
  }
  ReviewList.prototype = {
    el: $("#review"),
    list: $("#review-list"),

    render: function() {
      this.list.empty();

      this.collection.items.forEach(function(item) {
        this.addReview(item);
      }.bind(this));

      var tally = this.collection.items.length;
      this.el.find(".tally").html(tally);
      $(".timeago").timeago();
    },

    addReview: function(review) {
      var view = new ReviewRow(review);
      this.list.append(view.render().el);
    }
  }
})