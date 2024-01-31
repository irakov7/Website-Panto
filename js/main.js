const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

//Click on the button with hints
for (let btn of infoBtns) {
	btn.addEventListener('click', function (e){
		e.stopPropagation();
		this.parentNode.querySelector('.info-hint').classList.toggle('none');
	});
}
//Функция для закрытия всех подсказок
function closeHints() {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
}

//Close all tooltips by clicking the entire document
document.addEventListener('click', closeHints);

	for (let hint of infoHints) {
    hint.addEventListener('click', function(e) {
        e.stopPropagation();
    });
	}

//swiper slider
const swiper = new Swiper('.swiper', {

	slidesPerView: 1,
	spaceBetween: 42,
	//loop: true,
	//freeMode: true,

	breakpoints: {
   
    600: {
    	slidesPerView: 2,
   		spaceBetween: 20,
   },
       920: {
        slidesPerView: 3,
         spaceBetween: 20,
       },
	  	1230: {
       	 slidesPerView: 4,
     	 spaceBetween: 42,
     },
   },
 
  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
});

//tabs
const tabsBtn = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtn) {
	btn.addEventListener('click', function () {
		for (let btn of tabsBtn) {
			//Remove the active class on all buttons
			btn.classList.remove('tab-controls__btn--active');
		}
		//Add an active class when clicked
		this.classList.add('tab-controls__btn--active');


		//hide all tabs
		for (let products of tabsProducts) {

			if (this.dataset.tab === 'All') {
				products.classList.remove('none');
			} else {
					if (products.dataset.tabValue === this.dataset.tab) {
					products.classList.remove('none');
				} else {
					products.classList.add('none');
				}
			}
		}
		swiper.update()
	})
}

//Mobile Nav

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('.mobile-nav-wrapper');

mobileNavOpenBtn.onclick = function (){
	mobileNav.classList.add('mobile-nav-wrapper-open');
}

mobileNavCloseBtn.onclick = function (){
	mobileNav.classList.remove('mobile-nav-wrapper-open');
}

