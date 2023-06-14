  $(document).ready(function() {
	var slideIndex = 0;
	showSlides();
	function showSlides() {
		var i;
        var slides = $(".slideshow-container .slide");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
		slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); // Измените значение 3000 на интервал, который вам нужен для показа каждого слайда
      }
    });

$(document).ready(function() {
	$('.menu-button').hover(function() {
		$('.dropdown-menu').stop().slideDown(200);
	}, function() {
		$('.dropdown-menu').stop().slideUp(200);
	});
});