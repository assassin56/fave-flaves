$(document).ready(function() {
  var flavors = ["pistachio", "berry", "chocolate", "vanilla", "coconut"];

  flavors.forEach(function(flavor){
    $("ul#output").append('<li></li>', flavor);
  });
});