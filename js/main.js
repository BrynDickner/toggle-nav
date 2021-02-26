
const clickButton = document.querySelector('.toggle-button');

clickButton.addEventListener('click',() => {
	document.querySelector('nav').classList.toggle('show-nav');
})