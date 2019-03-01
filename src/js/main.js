

 $('.agenda__txt').readmore({ 


});



// $(document).ready(function () {

// // circle active
// $("[data-readmore-toggle='undefined1']").on("click", function () {
// 	console.log("link")
// 	// $(this).parent().parent().parent().parent().addClass("active");
// })

// })


console.log("x")

const traingleBtn = $(".speaker__imgBtnCont");
const imgCont = $(".speaker__imgCont");

traingleBtn.on("click", function () {
	console.log("onclick")
	if (!$(this).parent().hasClass("active")) {
		console.log("nie ma")
		imgCont.removeClass("active");
		$(this).parent().addClass("active");

	} else {
		console.log("ma")
		imgCont.removeClass("active");
	}

})




// read more

// $(document).ready(function () {
// 	// Configure/customize these variables.
// 	var showChar = 150; // How many characters are shown by default
// 	var ellipsestext = "...";
// 	var moretext = "Show more";
// 	var lesstext = "Show less";


// 	$('.more').each(function () {
// 		var content = $(this).html();

// 		if (content.length > showChar) {

// 			var c = content.substr(0, showChar);
// 			var h = content.substr(showChar, content.length - showChar);

// 			var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

// 			$(this).html(html);
// 		}

// 	});

// 	$(".morelink").click(function () {
// 		if ($(this).hasClass("less")) {
// 			$(this).removeClass("less");
// 			$(this).html(moretext);
// 		} else {
// 			$(this).addClass("less");
// 			$(this).html(lesstext);
// 		}
// 		$(this).parent().prev().slideDown();
// 		$(this).prev().toggle();
// 		return false;
// 	});
// });

// end read more



// // global variable for the player
// var player;

// // this function gets called when API is ready to use
// function onYouTubePlayerAPIReady() {
// 	// create the global player from the specific iframe (#video)
// 	player = new YT.Player('video', {
// 		events: {
// 			// call this function when player is ready to use
// 			'onReady': onPlayerReady
// 		}
// 	});
// }

// function onPlayerReady(event) {

// 	// bind events
// 	var playButton = document.getElementById("play-button");
// 	playButton.addEventListener("click", function () {
// 		player.playVideo();
// 	});


// }

// // Inject YouTube API script
// var tag = document.createElement('script');
// tag.src = "//www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);








// $(".review__rodo").on("click", function () {
// 	$(".review__tick").toggleClass("active");
// })

// // nav
const mobileBtn = $(".navMobile__btnCont");
const mobileNavActiv = $(".navMobileActive");

console.log("test")
mobileBtn.on("click", function () {
	console.log("active");
	if (!(mobileBtn.hasClass("active"))) {
		console.log("nie ma active");
		$(mobileBtn).addClass("active");
		$(mobileNavActiv).addClass("active");
	} else {
		$(mobileBtn).removeClass("active");
		$(mobileNavActiv).removeClass("active")
	}

})

$(".navMobileActive__menu > li").on("click", function () {
	console.log("link")
	$(mobileBtn).removeClass("active");
	$(mobileNavActiv).removeClass("active")
})





// scroll to section
// function scrollToSection(destination) {
// 	const header = $('.header');
// 	let headerOffset = 0;
// 	if (header.length > 0) {
// 		headerOffset = header.outerHeight() + 0;
// 	}
// 	// const offset = -Math.abs(headerOffset);
// 	const offset = -30;
// 	let scrollTop;
// 	if (destination == 0) {
// 		scrollTop = $('body').offset().top;
// 	} else {
// 		scrollTop = $(destination).offset().top + offset;
// 	}
// 	$('html, body').animate({
// 		scrollTop: scrollTop
// 	}, 600);
// }
// $('.scroll_to_section').on('click', function (e) {
// 	e.preventDefault();
// 	if (mobileNavActiv.hasClass('active')) {
// 		mobileBtn.removeClass('active');
// 		mobileNavActiv.removeClass('active');
// 	}
// 	scrollToSection($(this).attr('href'));
// 	return false;
// });

var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	slidesPerView: 1,
	direction: 'horizontal',
	// loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.button__reusable__next--carousel',
		prevEl: '.button__reusable__prev--carousel',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})

// var mySwiperReviews = new Swiper('.swiper-containerReviews', {
// 	// Optional parameters
// 	direction: 'horizontal',
// 	loop: true,
// 	slidesPerView: 1,

// 	// If we need pagination
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.button__reusable__next--reviews',
// 		prevEl: '.button__reusable__prev--reviews',
// 	},

// 	// And if we need scrollbar
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// })

// var mySwiperTestimonials = new Swiper('.swiper-containerTestimonials', {
// 	// Optional parameters
// 	direction: 'horizontal',
// 	// loop: true,
// 	slidesPerView: 3,

// 	// If we need pagination
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.button__reusable__next--testimonials',
// 		prevEl: '.button__reusable__prev--testimonials',
// 	},

// 	// And if we need scrollbar
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},

// 	breakpoints: {
// 		990: {
// 			slidesPerView: 2,
// 			// spaceBetween: 10
// 		},
// 		// when window width is <= 540px
// 		540: {
// 			slidesPerView: 1,
// 			// spaceBetween: 10
// 		},
// 	}
// })

// videoSection
// $(".videoSect__playCont").on("click", function () {
// 	console.log("img");

// 			$(".videoSect__imgCont").fadeOut();

// 	// $(".videoSect__imgCont").css({
// 	// 	opacity: 0,
// 	// 	transition: 'opacity 0.5s ease-in-out',
// 	// 	// visibility: 'hidden',
// 	// });

// })


// toggle


// $(".faq__smallCont").on("click", function () {

// 	if (!$(this).parent().find(".faq__sliderCont").hasClass("active")) {

// 		$(".faq__sliderCont").removeClass("active");
// 		$(".faq__sliderCont").slideUp({

// 			duration: 400,

// 		});

// 		$(this).parent().find(".faq__sliderCont").addClass("active");


// 		$(this).parent().find(".faq__sliderCont").slideDown({

// 			duration: 400,

// 		});

// 	} else {
// 		$(".faq__sliderCont").removeClass("active");
// 		$(this).parent().find(".faq__sliderCont").slideUp({

// 			duration: 400,

// 		});
// 	}

// })



// $(".faq__smallCont").on("click", function () {
// 	console.log("xxx")
// 	if(!$(this).hasClass("active")){
// 		console.log("xxxvv")
// 		$(".faq__smallCont").removeClass("active");
// 		$(this).addClass("active");
// 	}
// 		else {
// 			$(".faq__smallCont").removeClass("active");
// 		}


// })