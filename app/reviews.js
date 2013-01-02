$(function() {
   window.Review = Backbone.Model.extend({
      attachment: null,
      bug: null,
      time: '',
      url : '/'
   });

   window.Reviews = Backbone.Collection.extend({
      model: Review,
      url: '/',
      fetch: function() {
         bzhome.user.requests(function(err, requests) {
          console.error(err);
            this.reset(requests.all);
         }.bind(this));
      }
   });
   window.reviews = new Reviews;

   window.ReviewRow = Backbone.View.extend({
      tagName: "div",

      className: "review-item",

      template: Handlebars.compile($("#review-item").html()),

      render: function() {
         $(this.el).html(this.template(this.model.toJSON()));
         return this;
      }
   });

   window.ReviewList = Backbone.View.extend({
      el: $("#reviews"),

      list: $("#all-reviews-list"),

      type: "reviews",

      initialize: function() {
         var collection = this.collection = reviews;

         collection.bind("add", this.addReview, this);
         collection.bind("reset", this.render, this);

         // get list from bugzilla server
         collection.fetch();
      },

      render: function(reviews) {
         this.list.empty();
         this.collection.each(_(this.addReview).bind(this));
         this.el.find(".count").html(this.collection.length);
         $(".timeago").timeago();
      },

      addReview: function(review) {
         var view = new ReviewRow({
            model: review
         });
         this.list.append(view.render().el);
      }
   });
});
