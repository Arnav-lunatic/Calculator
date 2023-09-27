const buttons = document.querySelectorAll('button')
const recentOutput = document.querySelector('.recentOutput')
const prevOutput = document.querySelector('.prevOutput')

let equation = ''

// solve function split in the form of array, and solve the equation
function solve() {
    let elems = equation.split(' ')
    if (elems[1]==='+' ){
        result = parseFloat(elems[0]) + parseFloat(elems[2])
        equation=result.toFixed(4);
    }
    if (elems[1]==='-'){
        result = parseFloat(elems[0]) - parseFloat(elems[2])
        equation=result.toFixed(4);
    }
    if (elems[1]==='x'){
        result = parseFloat(elems[0]) * parseFloat(elems[2])
        equation=result.toFixed(4);
    }
    if (elems[1]==='/'){
        result = parseFloat(elems[0]) / parseFloat(elems[2])
        equation=result.toFixed(4);
    }
}

/*
countOperation count the operation , if the user enter the second operator without solve the first operation then it will automatically solve the first operation equation
if countOperation = 0 means only 0 or 1 operators are present in the equation
but if countOperation = 1 means user is trying to add second operator, so 
first it will solve the first operation
*/
let countOperation = 0



buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        // take the operation input, add it to the equation. And set the decimal count to 0
        if (button.innerHTML === '+') {
            equation+= ' + '

            // solving first operation, if their is any operation.  
            if (countOperation === 1) {
                solve()
                countOperation = 0
            }else {
                countOperation = 1
            }
            

        }

        if (button.innerHTML === '-') {
            equation+= ' - '
            if (countOperation === 1) {
                solve()
                countOperation = 0
            }else {
                countOperation = 1
            }
            

        }

        if (button.innerHTML === 'x') {
            equation+= ' x '
            if (countOperation === 1) {
                solve()
                countOperation = 0
            }else {
                countOperation = 1
            }
            

        }

        if (button.innerHTML === '/') {
            equation+= ' / '
            if (countOperation === 1) {
                solve()
                countOperation = 0
            }else {
                countOperation = 1
            }
            
        }



        // take the Enter input and the previous equation in the prevOutput
        if (button.innerHTML === 'Enter') {
            prevOutput.value = equation
            solve()
            
            countOperation = 0
        }

        // take the number input and add it to the equation
        if (button.innerHTML === '1' ||
            button.innerHTML === '2' ||
            button.innerHTML === '3' ||
            button.innerHTML === '4' ||
            button.innerHTML === '5' ||
            button.innerHTML === '6' ||
            button.innerHTML === '7' ||
            button.innerHTML === '8' ||
            button.innerHTML === '9' ||
            button.innerHTML === '0') {
            equation+=button.innerHTML
            
        }

        // Decimal input
        if (button.innerHTML === '.') {
            equation+=button.innerHTML                   
        }

        // All clear
        if (button.innerHTML === 'AC') {
            equation = ''
            countOperation = 0
        }

        // Backspace
        if (button.innerHTML === 'DEL') {
            equation = equation.slice(0,-1)
        }

        // show the Output
        recentOutput.value = equation
    })
});