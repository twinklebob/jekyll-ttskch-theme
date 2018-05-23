$(function(){
    var path = document.location.href;
    $.getJSON("https://webmention.io/api/mentions?jsonp=?", {
      target: path
    }, function(data){
      console.log(data);
    });
});