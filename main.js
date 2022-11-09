const cardNumberSpan = document.querySelector('.span__cardNumber');
const cardNumberInput = document.querySelector('[data-cardNumber]');

const cardNameSpan = document.querySelector('.span__cardName')
const cardNameInput = document.querySelector('[data-cardName]')

const cardExpMonthSpan = document.querySelector('[data-expMonthSpan]');
const cardMonthInput = document.querySelector('[data-cardMonth]');

const cardYearInput = document.querySelector('[data-cardYear]');
const cardExpYearSpan = document.querySelector('[data-expYearSpan]');

function setCardName() {
    cardNameSpan.textContent = cardNameInput.value

    if (cardNameSpan.textContent.length > 26) {
        cardNameSpan.style.fontSize = "8px" 
    } else {
        cardNameSpan.style.fontSize = "" 
    }
}

function setCardNumber() {
    let result = cardNumberInput.value.replace(/.{4}/g, '$& ');;
    cardNumberSpan.textContent = result;
}

function setCardMonth() {
    cardExpMonthSpan.textContent = cardMonthInput.value;   
}

function setCardYear() {
    cardExpYearSpan.textContent = cardYearInput.value;
}


cardNameInput.addEventListener("keyup", setCardName)
cardNumberInput.addEventListener("keyup", setCardNumber)
cardMonthInput.addEventListener("keyup", setCardMonth)
cardYearInput.addEventListener("keyup", setCardYear)