/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.getElementById('btn');
const inputEl = document.getElementById('input-el');

const genLength = document.getElementById('gen-length');
const genVolume = document.getElementById('gen-volume');
const genMass = document.getElementById('gen-mass');


btn.addEventListener('click', () => {
    num = inputEl.value 
    
    lengthGen();
    volumeGen();
    massGen();
    inputEl.value = ""
})

function lengthGen() {
    let meters = ((inputEl.value) * 0.3048)
    let feet = ((inputEl.value) * 3.281)
    genLength.innerHTML = `${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meters} meters`;
}

function volumeGen() {
    let liters = ((inputEl.value) * 3.785)
    let gallons = ((inputEl.value) * 0.264)
    genVolume.innerHTML = `${inputEl.value} liters = ${gallons} gallons | ${inputEl.value} gallons = ${liters} liters`;
}

function massGen() {
    let kilos = ((inputEl.value) * 0.454)
    let pounds = ((inputEl.value) * 2.204)
    genMass.innerHTML = `${inputEl.value} kilos = ${pounds} pounds | ${inputEl.value} gallons = ${kilos} kilos`;
}
