$(".menu-burger").on("click", function (e) {
  e.preventDefault;
  $(this).toggleClass("burger-active");
  $(".content").toggleClass("content-active");
});
