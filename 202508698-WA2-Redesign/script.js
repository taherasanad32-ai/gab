//Tahera

document.addEventListener('DOMContentLoaded', () => {

    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.innerHTML = '🔥 Welcome to Brew Haven — Fresh Coffee & Bagels!';
    document.body.appendChild(alertBox);

    setTimeout(() => alertBox.classList.add('show'), 800);
    setTimeout(() => alertBox.classList.remove('show'), 5000);

    document.querySelectorAll('.card,.box,.product,img,button').forEach(el => {
        el.classList.add('glow-hover');
    });

    const topBtn = document.createElement('button');
    topBtn.innerHTML = '↑';
    topBtn.className = 'scroll-top';
    document.body.appendChild(topBtn);

    window.addEventListener('scroll', () => {
        topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});

//Add to cart (Rabab)

function addToCart(product, price, image) {
    var cart = document.getElementById('cart');
    cart.style.display = 'block';

    var cartBag = document.createElement('li');
    cartBag.innerHTML = `<img src="${image}" alt="${product}" class="cart-image">${product} - BD ${price.toFixed(2)}`;

    document.getElementById('productCart').appendChild(cartBag);

    var currentTotal = parseFloat(document.getElementById('totalPrice').textContent);
    var moreTotal = currentTotal + price;
    document.getElementById('totalPrice').textContent = moreTotal.toFixed(2);

    setTimeout(function () {
        cart.style.display = 'none';
    }, 3000);
}

//to add error mesages to the form inputs (Rabab)
const form = document.getElementById('overall-box');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.getElementById('text-area1');
    const email = document.getElementById('text-area3');
    const phone = document.getElementById('text-area2');


    const nameError = document.getElementById('text-area1Error');
    const emailError = document.getElementById('text-area3Error');
    const phoneError = document.getElementById('text-area2Error');


    resetErrorMessages();

    let isValid = true;

    if (name.value.trim() === '') {
        nameError.textContent = 'username is required';
        isValid = false;
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    if (phone.value.trim() === '') {
        phoneError.textContent = 'Phone is required';
        isValid = false;
    }

    if (isValid) {
        // Form is valid, submit or perform further actions
        form.submit();
    }
}

function resetErrorMessages() {
    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}