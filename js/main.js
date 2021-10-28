'use strict';


let handleClick = i => {  
    let buttons = document.getElementsByClassName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            console.log(buttons[i].innerHTML);
        })
    }
}