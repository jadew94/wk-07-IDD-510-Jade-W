$( document ).ready(function() {
  $( "#tabs" ).tabs({
      event: "mouseover"
    });
});

$(".btn").click(function(){
    $("blockquote").toggle();
});
