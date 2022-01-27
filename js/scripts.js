$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const beach = $("input#beach").val();
    const favColor = $("select#favColor").val();

    $("#celeb").removeAttr("class");
    if (beach === "yes" && favColor === "red") {
      $("#img-hidden").show();
     } else if (beach === "no" && FavColor === "blue") {
      $("#img-hidden").show();
    } else { (beach === "idk" && FavColor === "other")
      $("#img-hidden").show();
    }
    
    event.preventDefault();
  });
});