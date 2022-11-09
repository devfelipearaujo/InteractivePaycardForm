const cardNumberSpan = document.querySelector('.span__cardNumber');
const cardNumberInput = document.querySelector('[data-cardNumber]');

const cardNameSpan = document.querySelector('.span__cardName')
const cardNameInput = document.querySelector('[data-cardName]')

const cardExpMonthSpan = document.querySelector('[data-expMonthSpan]');
const cardMonthInput = document.querySelector('[data-cardMonth]');

const cardExpYearSpan = document.querySelector('[data-expYearSpan]');
const cardYearInput = document.querySelector('[data-cardYear]');

const cardCvcSpan = document.querySelector('.span__cvc')
const cardCvcInput = document.querySelector('[data-cardCvc]')


function setCardName() {
    cardNameSpan.textContent = cardNameInput.value

    if (cardNameSpan.textContent.length > 27 && window.innerWidth < 1200) {
        cardNameSpan.style.fontSize = "9px" 
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

function setCardCvc() {
    cardCvcSpan.textContent = cardCvcInput.value;
}


cardNameInput.addEventListener("keyup", setCardName)
cardNumberInput.addEventListener("keyup", setCardNumber)
cardMonthInput.addEventListener("keyup", setCardMonth)
cardYearInput.addEventListener("keyup", setCardYear)
cardCvcInput.addEventListener("keyup", setCardCvc)

console.log(window.innerWidth)