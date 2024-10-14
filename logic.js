

const btn = document.querySelectorAll('.operation')
const screen = document.querySelector('.screen')
const result = document.querySelector('.results')
const equals = document.querySelector('.compute')
const conditional = document.querySelector('.conditional')



function btnLogic(){
	const btnVisual = this.innerHTML;
	const btnFunc = this.value;
	if(conditional.innerHTML === '!'){
		screen.innerHTML = btnVisual
		conditional.innerHTML = '';
		result.innerHTML += btnFunc;
	}
	else if(screen.innerHTML==='0'){
		screen.innerHTML = btnVisual;
		result.innerHTML += btnFunc;
	}
	else{
		screen.innerHTML += btnVisual;
		result.innerHTML += btnFunc;
	}
}

function equalsLogic(){
	const ans = eval(result.innerHTML);
	screen.innerHTML = ans;
	conditional.innerHTML = '!';
	result.innerHTML = '';
}







btn.forEach(elm=>{
	elm.addEventListener('click', btnLogic)
})
equals.addEventListener('click', equalsLogic)