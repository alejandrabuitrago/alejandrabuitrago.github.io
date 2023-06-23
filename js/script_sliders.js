var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 3,
	spaceBetween: 10,

  
	breakpoints: {
	  360: {
		slidesPerView: 2,
		spaceBetween: 20,
	  },
	  834: {
		slidesPerView: 3,
		spaceBetween: 20,
	  },
	  1240: {
		slidesPerView: 3,
		spaceBetween: 30,
	  },
	} 
    });