function isMobile() {
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/mobile/i)) {
		return true;
	} else {
		return false;
	}
}

function isIpad() {
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/ipad/i)) {
		return true;
	} else {
		return false;
	}
}
function getQueryString(name) {
	let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	let r = location.search.substr(1).match(reg);
	if (r != null)
		return decodeURI(r[2]);
	return null;
}
var swiperOpts = {
	direction: 'horizontal',
	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	observer: true,
	observeParents: true,
};
let Lengths = {
	'student': 32,
	'coach': 15,
};
if(isMobile()) {
	document.querySelector('.swiper-button-prev').className = 'swiper-button-prev hide';
	document.querySelector('.swiper-button-next').className = 'swiper-button-next hide';
}
if(isIpad()) {
	document.querySelector('.swiper-container').className = 'swiper-container height-full';
}
if(innerWidth > 982) {
	swiperOpts['slidesPerView'] = 2;
	swiperOpts['slidesPerGroup'] = 2;
} else {
	swiperOpts['slidesPerView'] = 1;
	swiperOpts['slidesPerGroup'] = 1;
}
appendImages();
new Swiper('.swiper-container', swiperOpts);
function appendImages() {
	let hash = location.hash.replace('#', '');
	if (!hash) return;
	let length = Lengths[hash];
	var arr = [];
	for(var i = 1; i <= length; i++) {
		arr.push(`<div class="swiper-slide"><img class="screenshot" src="img/${hash}/${i}.jpg" /></div>`);
	}
	document.querySelector('.swiper-wrapper').innerHTML = arr.join('');
}