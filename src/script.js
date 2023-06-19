const printEqn = document.querySelector('.eqn')
const printables = document.querySelectorAll('.printable')
const solve = document.querySelector('#solve')
const cancel = document.querySelector('#cancel')
const printSol = document.querySelector('.sol')
const percentage = document.querySelector('#per')
const nagate = document.querySelector('#nagate')

let valArray = []

const print = (item) => {
    let val = item.innerHTML
    valArray.push(val)
    printEqn.innerHTML = valArray.join('')
}

const solution = (values) => {
    let sol = eval(values)
    printSol.innerHTML = sol
}

const clear = () => {
    printEqn.innerHTML = ''
    printSol.innerHTML = ''

}

const percentageCalc = (value) => {
    let val = eval(value)
    let sol = (val / 100) + '%'
    printSol.innerHTML = sol
}

const nagateVal = (val) => {
    let newValArray = ['-', ...val]
    printEqn.innerHTML = newValArray.join('')
    valArray = newValArray
}

const removeNegate = (val) => {
    val.shift()
    let newValArray = val
    printEqn.innerHTML = newValArray.join('')
    valArray = newValArray
}

printables.forEach((item) => {
    item.onclick = () => {
        print(item)
    }
})

solve.onclick = () => {
    solution(printEqn.innerHTML)
}

cancel.onclick = () => {
    clear()
    valArray = []
    nagateClicked = false
}

percentage.onclick = () => {
    percentageCalc(printEqn.innerHTML)
}

let nagateClicked = false
nagate.onclick = () => {
    if (!nagateClicked) {
        nagateVal(valArray)
        nagateClicked = true
    } else {
        removeNegate(valArray)
        nagateClicked = false
    }
}