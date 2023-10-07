$(document).ready(function () {
  $(".effect").click(function () {
    $(".effect").removeClass("active");
    $(this).addClass("active");
  });

  //  Content Menu Hover
  $(".cardKonten").hover(
    function () {
      $(this).addClass("hovered"); // Menambahkan class 'hovered' saat card di-hover
    },
    function () {
      $(this).removeClass("hovered"); // Menghapus class 'hovered' saat card tidak di-hover
    }
  );
});
