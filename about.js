console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert ('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


const duckImg = document.querySelector("img");

duckImg.addEventListener('mouseover', () => {
	alert('You are a nice person')
})

