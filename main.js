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

// --------Trocar Valores dos Spans visuais do cartão--------

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


// --------Validação dos campos do formulário--------
const form = document.querySelector('.form-pendente')
const formConcluido = document.querySelector('.form-concluido')
const input = document.querySelector('.form__submit')

input.addEventListener("click", validarInputs)

function validarInputs(evento) {
    evento.preventDefault()
    const nameRegex = /[^a-zA-Z\s]/;

    if (nameRegex.test(cardNameInput.value)) {
        cardNameInput.classList.add('erro')
        cardNameInput.parentElement.classList.add('erro__message')
        cardNameInput.parentElement.classList.remove('erro__message-blank')
    } else if (!cardNameInput.value) {
        cardNameInput.classList.add('erro')
        cardNameInput.parentElement.classList.add('erro__message', 'erro__message-blank')
    } else {
        cardNameInput.classList.remove('erro')
        cardNameInput.parentElement.classList.remove('erro__message')
        cardNameInput.parentElement.classList.remove('erro__message-blank')
    }

    if (!cardNumberInput.value || cardNumberInput.value.length < 16 ) {
        cardNumberInput.classList.add('erro')
        cardNumberInput.parentElement.classList.add('erro__message','erro__message-number')
    } else {
        cardNumberInput.classList.remove('erro')
        cardNumberInput.parentElement.classList.remove('erro__message','erro__message-number')
    }
    
    if (!cardMonthInput.value || cardMonthInput.value.length < 2) {
        cardMonthInput.classList.add('erro')
        cardMonthInput.parentElement.classList.add('erro__message','erro__message-blank')
    } else {
        cardMonthInput.classList.remove('erro')
        cardMonthInput.parentElement.classList.remove('erro__message')
        cardMonthInput.parentElement.classList.remove('erro__message-blank')
    }

    if (!cardYearInput.value || cardYearInput.value.length < 2 ) {
        cardYearInput.classList.add('erro')
        cardYearInput.parentElement.classList.add('erro__message','erro__message-blank')
    } else {
        cardYearInput.classList.remove('erro')
        cardYearInput.parentElement.classList.remove('erro__message')
        cardYearInput.parentElement.classList.remove('erro__message-blank')
    }

    if (!cardCvcInput.value || cardCvcInput.value.length < 3 ) {
        cardCvcInput.classList.add('erro')
        cardCvcInput.parentElement.classList.add('erro__message','erro__message-blank')
    }  else {
        cardCvcInput.classList.remove('erro')
        cardCvcInput.parentElement.classList.remove('erro__message')
        cardCvcInput.parentElement.classList.remove('erro__message-blank')
    }
    
    const erroInputs = document.querySelectorAll('.erro')
    if (erroInputs.length < 1) {
        form.style.display = 'none'
        formConcluido.style.display = 'flex'
    }

}

// --------Função do botão "continue"--------

const continueBtn = document.querySelector('.form__submit-continue')
continueBtn.addEventListener("click", ()=>{
    form.style.display = 'block'
    formConcluido.style.display = 'none'

})