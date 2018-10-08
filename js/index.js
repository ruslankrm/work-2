document.querySelectorAll('.number, .knopka')
    .forEach( el => el.addEventListener('click', digitOperClick));
    
    function digitOperClick(e) {
        const target = e.target;
        const display = document.querySelector('.display');
        display.value += target.innerText;
    }
    
    document.querySelector('.equal')
    .addEventListener('click', equal);
    
    function equal() {
        const display = document.querySelector('.display');
        display.value = eval(display.value)
    }