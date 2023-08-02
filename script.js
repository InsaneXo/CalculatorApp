// console.log("HEloo")

let string = "";
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const cal = document.querySelector('.screen input')
        if (e.target.innerHTML == '=') {
            string = eval(string)
            cal.value = string
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            cal.value = string
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length-1)
            cal.value = string
        }
        else {
            string = string + e.target.innerHTML
            cal.value = string
        }
    })
})