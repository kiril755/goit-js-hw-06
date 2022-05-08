const validationInput = document.querySelector("#validation-input")

const checkLenght = (event) => {
    if (validationInput.getAttribute("data-length") >= event.currentTarget.value.length) {
        validationInput.classList.add("valid")
    } else validationInput.classList.add("invalid")
}

validationInput.addEventListener("blur", checkLenght)



