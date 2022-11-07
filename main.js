const cardNumberSpan = document.querySelector(".span__cardNumber")

const cardNumberInput = document.querySelector('[data-cardNumber]')




function changeSpan() {
    let result = cardNumberInput.value.replace(/.{4}/g, '$& ');;
    cardNumberSpan.textContent = result;
}

cardNumberInput.addEventListener("keyup", changeSpan)