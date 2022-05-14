const validationInput = document.querySelector("#validation-input")

// const checkLenght = (event) => {
//     if (validationInput.getAttribute("data-length") >= event.currentTarget.value.length) {
//         validationInput.classList.add("valid")
//         validationInput.classList.remove("invalid")
//     } else {
//         validationInput.classList.add("invalid")
//         validationInput.classList.remove("valid")
//     }
// }

const checkLenght = (event) => {
    if (event.currentTarget.value.length != "") {
        event.currentTarget.value.length == validationInput.getAttribute("data-length") ?
        validationInput.classList.add("valid") : validationInput.classList.add("invalid")
    } else validationInput.classList.remove("valid" && "invalid")
}

const focusRemove = () => {
    validationInput.classList.remove("valid", "invalid")
    }

validationInput.addEventListener("blur", checkLenght)
validationInput.addEventListener("focus", focusRemove)



