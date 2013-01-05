Handlebars.registerPartial("bug_tooltip", "bug {{bug.id}} - " +
  "{{bug.status}}{{#if bug.resolution}} {{bug.resolution}}{{/if}} - " +
  "{{bug.summary}} (updated {{timeago bug.last_change_time}})"
);

Handlebars.registerHelper('show_bug', function(id) {
  return MyReviews.base + "/show_bug.cgi?id=" + id;
});

Handlebars.registerHelper('show_comment', function(id, comment) {
  return MyReviews.base + "/show_bug.cgi?id=" + id + "#c" + comment;
})

Handlebars.registerHelper('show_attach', function(id, action) {
   action = action || "diff";
   return MyReviews.base + "/attachment.cgi?id=" + id + "&action=" + action;
})

Handlebars.registerHelper('show_splinter', function(id, attachId) {
  return MyReviews.base + "/page.cgi?id=splinter.html&bug=" +
     id + "&attachment=" + attachId;
})

Handlebars.registerHelper('show_type', function(type) {
  return type;
  switch(type) {
    case 'superreview':
      return 'sr';
    case 'feedback':
      return 'f';
    case 'review':
    default:
      return 'r';
  }
});

Handlebars.registerHelper('urgentify', function(date) {
   var day = 1000 * 60 * 60 * 24 ;
   if ((Date.now() - new Date(date)) > (10 * day)) {
     return "very-overdue";
   }
   if ((Date.now() - new Date(date)) > (5 * day)) {
     return "overdue";
   }
   return "";
});

Handlebars.registerHelper('timeago', function(date) {
   return $.timeago(date);
});

Handlebars.registerHelper('linkify', function(text) {
   return linkify(text).replace(/bug (\d+)/gi, "<a target=_blank href="
      + MyReviews.base + "/show_bug.cgi?id=$1>$&</a>")
})

Handlebars.registerHelper('idify', function(name) {
   return utils.idify(name);
})

Handlebars.registerHelper('format_name', function(name) {
   // remove nick from "Heather [:harth]"
   return name.replace(/[\[\(].+[\]\)]/, "")
})
