document.querySelector('#btn').addEventListener('click', () => {
    let block = document.querySelector('.contact');
    block.classList.add('lighting');
    setTimeout(function() {
        block.classList.remove('lighting');
    }, 1500);
});

document.querySelector('#btn2').addEventListener('click', () => {
    let block = document.querySelector('.aboutMe');
    block.classList.add('lighting');
    setTimeout(function() {
        block.classList.remove('lighting');
    }, 1500);
});

document.querySelector('#btn3').addEventListener('click', () => {
    let block = document.querySelector('.educationLight');
    block.classList.add('lighting');
    setTimeout(function() {
        block.classList.remove('lighting');
    }, 1500);
});

document.querySelector('#btn4').addEventListener('click', () => {
    let block = document.querySelector('.skillsLight');
    block.classList.add('lighting');
    setTimeout(function() {
        block.classList.remove('lighting');
    }, 1500);
});

document.querySelector('#btn5').addEventListener('click', () => {
    let block = document.querySelector('.expLight');
    block.classList.add('lighting');
    setTimeout(function() {
        block.classList.remove('lighting');
    }, 1500);
});

document.querySelector('#btn6').addEventListener('click', () => {
    let block = document.querySelector('.codeLight');
    block.classList.add('lighting');
    setTimeout(function() {
        block.classList.remove('lighting');
    }, 1500);
});