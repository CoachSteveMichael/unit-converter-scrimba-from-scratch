//set event listener to convert button
//set event listener to get value in text input
//set event listener to run conversion formulas
// set event listener to texthtml results to placeholders
let massText = document.querySelector("#mass-text");
let volumeText = document.querySelector("#volume-text");
let lengthText = document.querySelector("#length-text");

let convertButton = document.querySelector("#convert-btn");

convertButton.addEventListener("click", function () {
    let input = document.querySelector("#input");
    let inputValue = input.value;
    massText.innerHTML = `${inputValue} kilos = ${kilogramsPounds(inputValue)} pounds || ${kilogramsPounds(inputValue)} pounds =  ${inputValue} kilos`;
    volumeText.innerHTML = `${inputValue} liters = ${litersGallons(inputValue)} gallons || ${litersGallons(inputValue)} gallons = ${inputValue}`;
    lengthText.innerHTML = `${inputValue} meters = ${metersFeet(inputValue)} feet || ${metersFeet(inputValue)} feet = ${inputValue} meters`
    
    
})

function metersFeet (num) {
    return (num*3.28).toFixed(3) 
}

function litersGallons (num) {
    return (num*0.264172).toFixed(3) 
}
    
function kilogramsPounds(num) {
    return (num*2.2).toFixed(3);
    
    
}


  
    //convert meters to feet formula
//convert liters to gallons formula
//convert kilograms to pounds formula