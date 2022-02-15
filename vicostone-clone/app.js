// Click on menu
var menu = $(".menu ul");
var menuItems = menu.find("li").find("a");
menuItems.on("click", function () {
  menuItems.removeClass("active");
  $(this).addClass("active");
});

// Change image when hover toggle on card
const wrapImg = document.querySelectorAll("#wrap-img");
wrapImg.forEach((item) => {
  $(item).hover(function () {
    $(this).find("img:last").fadeToggle();
  });
});

// Scale image when hover
$(".introduce")
  .find("img")
  .css("transition", "transform 300ms ease-in-out")
  .hover(
    function () {
      $(this).css("transform", "scale(1.1)");
    },
    function () {
      $(this).css("transform", "scale(1)");
    }
  );
