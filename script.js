//Initial value of the count
let count = 0;

//Selection of all buttons and values
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//Looping through the buttons 
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const target = e.currentTarget.classList;
        const targetForColor = e.currentTarget;

        //Using if else to increase and decrease number
        if (target.contains('increase')) {
            count ++;
        } else if (target.contains('decrease')) {
            count --;
        } else {
            count = 0;
        };
    
        //Changing colors while using buttons
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = 'black'
        }

        //Changing values and logging it into the front screen
        value.textContent = count;
    })

})
    