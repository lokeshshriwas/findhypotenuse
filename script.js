const option = document.querySelectorAll(".ques")
const btn = document.querySelector("button")
const head = document.getElementById("output")

function calSquare(a, b){
    const ans1 = a*a
    const ans2 = b*b
    const sum = ans1 + ans2
    return sum
}

function calculate(){
    const hypotenous = calSquare(Number(option[0].value),Number(option[1].value));
    let rootOfHypotenous = Math.sqrt(hypotenous)
    head.innerHTML = `The value of hypotenous will be ${rootOfHypotenous}`
}

btn.addEventListener("click", calculate)