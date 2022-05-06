let counterValue = 0;


const decrementBtn = document.querySelector("[data-action=decrement]")
const incrementBtn = document.querySelector("[data-action=increment]")
const num = document.querySelector("#value");



const plus = () => {
    counterValue++;
    return num.textContent = counterValue;
};
const minus = () => {
    counterValue--;
    return num.textContent = counterValue;
};


incrementBtn.addEventListener("click", plus)

decrementBtn.addEventListener("click", minus)



