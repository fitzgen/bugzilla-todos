var utils = {
   dateAgo : function(daysAgo) {
      daysAgo = daysAgo || 0;
      var dayMs = 1000 * 60 * 60 * 24;
      return new Date(Date.now() - (dayMs * daysAgo));
   },

   dateString : function(daysAgo) {
      var date = utils.dateAgo(daysAgo);
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
   },

   queryFromUrl : function(url) {
      var vars = (url || document.URL).replace(/.+\?/, "").split("&"),
          query = {};
      for (var i = 0; i < vars.length; i++) {
         var pair = vars[i].split("=");
         query[pair[0]] = decodeURIComponent(pair[1]);
      }
      return query;
   },

   queryString : function(query) {
      var string = [];
      for (key in query) {
         string.push(encodeURIComponent(key) + "=" + encodeURIComponent(query[key]));
      }
      return string.join("&");
   },

   byTime : function(event1, event2) {
      return new Date(event2.time) - new Date(event1.time);
   },

   idify : function(name) {
     return name.replace(/\W/g, "-");
   },

   spinner : function(elem, inline) {
    var spinner = $("<img src='lib/indicator.gif' class='spinner'></img>");
    if (inline) {
      spinner.css({display: 'inline'});
    }
    elem.append(spinner);
  }
}