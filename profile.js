let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')


function colorPink(){
    alert('pink')
}
colorBtn.addEventListener('click', colorPink);

function favPlace() {
    alert('home')
}
placeBtn.addEventListener('click', favPlace);

function favRitual () {
    alert('morning walk with dogs')
}
ritualBtn.addEventListener('click', favRitual);