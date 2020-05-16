const img = [
	'1.jpg',
	'2.jpg',
	'3.jpg',
	'4.jpg',
	'5.jpg',

];

let count = img.length;

function randInt(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const cover = document.querySelector('.cover');
let card;

//document.querySelectorAll('.go').parentNode.removeChild(document.getElementById('123'));
let cardGo;

function init(){
	cardGo = document.querySelectorAll('.go');

	shuffle(img);
	for(let i = 0; i < img.length; i++){
		card = document.createElement('div');
		card.classList.add('card');
		card.style.background = `url('./images/${img[i]}')`;
		card.style.backgroundSize = 'cover';
		card.style.transform = `rotate(${randInt(-15, 15)}deg) translate(${randInt(-40, 40)}px, ${randInt(40, -40)}px)`;
		cover.append(card);
	}
}

init();

cover.addEventListener('click', (e) => {
	if(e.target.classList.contains('card')){
		e.target.classList.add('go');
		count --;
	}

	if(count == 0){
		e.target.parentNode.removeChild(e.target);
		cardGo.forEach((elem) => {elem.remove(document.querySelector('.go'))});
		
		init();
		count = img.length;
	}
});