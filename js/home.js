$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  if (a[0].content.split(" ").length <= 19) {
    $("#quote").append("<h2>" + a[0].content.substring(3, a[0].content.length - 5) + "</h2><h3 class='right'>— " + a[0].title + "</h3>");
  } else if (a[0].content.split(" ").length <= 39) {
    $("#quote").append("<h3>" + a[0].content.substring(3, a[0].content.length - 5) + "</h3><h4 class='right'>— " + a[0].title + "</h4>");
  } else {
    $("#quote").append("<h4>" + a[0].content.substring(3, a[0].content.length - 5) + "</h4><h5 class='right'>— " + a[0].title + "</h5>");
  }
  console.log(a[0].content);
});