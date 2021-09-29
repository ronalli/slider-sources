const upSlide = document.querySelector('.up-button');
const downSlide = document.querySelector('.down-button');
const mainSlide = document.querySelector('.main-slide');
const sidebar = document.querySelector('.sidebar');
const heightContainer = document.querySelector('.container').clientHeight;
const toggleBtn = document.querySelector('#toggle');
const container = document.querySelector('.container');
let switchToggle = 0;

const countSlide = mainSlide.querySelectorAll('div').length;

sidebar.style.top = `-${(countSlide - 1) * 100}vh`;

let indexSlide = 0;

upSlide.addEventListener('click', () => {
	changeSlide('up')
})

downSlide.addEventListener('click', () => {
	changeSlide('down')
})

document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowUp') changeSlide('up')
	if (e.key === 'ArrowDown') changeSlide('down')
})

document.addEventListener('wheel', (e) => {
	if (e.deltaY === -100) changeSlide('up')
	if (e.deltaY === 100) changeSlide('down')
})


function changeSlide(direction) {
	if (direction === 'up') {
		indexSlide--;
		if (indexSlide < 0) {
			indexSlide = countSlide - 1;
		}
	} else if (direction === 'down') {
		indexSlide++;
		if (indexSlide === countSlide) {
			indexSlide = 0;
		}
	}

	mainSlide.style.transform = `translateY(-${heightContainer * indexSlide}px)`
	sidebar.style.transform = `translateY(${heightContainer * indexSlide}px)`
}


toggleBtn.addEventListener('click', (e) => {
	if (switchToggle === 0) {
		e.target.parentNode.innerHTML = `<i class="fas fa-toggle-on"></i>`;
		switchToggle = 1;
		container.classList.add('gr');
	} else {
		e.target.parentNode.innerHTML = `<i class="fas fa-toggle-off"></i>`;
		switchToggle = 0;
		container.classList.remove('gr');
	}

})