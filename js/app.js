const form = document.getElementById('form');
let operantA = form['operantA'];
let operantB = form['operantB'];
let result = document.getElementById('result');
let img = document.getElementById('meme');



function add(){
    let operation = parseInt(operantA.value) + parseInt(operantB.value);
    if(isNaN(operation)){
        result.innerHTML="Please fill both fields with numbers"
    }
    else{
        result.innerHTML = `Result: ${operation}`;
        changeImg()
    }
}

function subtract(){
    let operation = parseInt(operantA.value) - parseInt(operantB.value);
    if(isNaN(operation)){
        result.innerHTML="Please fill both fields with numbers"
    }
    else{
        result.innerHTML = `Result: ${operation}`;
        changeImg()
    }
    
}

function multiply(){
    let operation = parseInt(operantA.value) * parseInt(operantB.value);
    if(isNaN(operation)){
        result.innerHTML="Please fill both fields with numbers"
    }
    else{
        result.innerHTML = `Result: ${operation}`;
        changeImg()
    }
}


function divide(){
    let operation = parseInt(operantA.value) / parseInt(operantB.value);
    if(isNaN(operation)){
        result.innerHTML="Please fill both fields with numbers"
    }
    else if(operantB.value === '0' || operantB.value === '-0') {
        result.innerHTML="The divisor can't be 0."
    }
    else{
        result.innerHTML = `Result: ${operation}`;
        changeImg();
    }
}

function changeImg(){
    img.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
}
