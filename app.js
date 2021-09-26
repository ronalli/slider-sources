const upSlide = document.querySelector('.up-button');
const downSlide = document.querySelector('.down-button');
const mainSlide = document.querySelector('.main-slide');
const sidebar = document.querySelector('.sidebar');
const heightContainer = document.querySelector('.container').clientHeight;

console.log(heightContainer);

const countSlide = mainSlide.querySelectorAll('div').length;

sidebar.style.top=`-${(countSlide-1)*100}vh`;

let indexSlide = 0;

upSlide.addEventListener('click', () => {
	changeSlide('up')
})

downSlide.addEventListener('click', () => {
	changeSlide('down')
})

function changeSlide(direction) {
	if(direction === 'up') {
		indexSlide--;
		if(indexSlide < 0) {
			indexSlide = countSlide-1;
		}
	} else if(direction === 'down') {
		indexSlide++;
		if(indexSlide === countSlide) {
			indexSlide = 0;
		}
	}

mainSlide.style.transform = `translateY(-${heightContainer*indexSlide}px)`
sidebar.style.transform = `translateY(${heightContainer*indexSlide}px)`

}