let headerElement = document.querySelector("header")

window.addEventListener("scroll", () => {
    if (scrollY > 100) {
        headerElement.classList.add("headerScrollFixed")
    }
    else {
        headerElement.classList.remove("headerScrollFixed")
    }
})


document.getElementById("saveBtn").addEventListener("click", function () {

    let userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    localStorage.setItem("enquiryData", JSON.stringify(userData));

    alert("Data Saved Successfully!");
});

(() => {
    'use strict'
    const form = document.querySelector('.needs-validation')
    const errorBox = document.getElementById('formError')

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            errorBox.classList.remove('d-none')
        } else {
            errorBox.classList.add('d-none')
        }
        form.classList.add('was-validated')
    }, false)
})

$(function () {
    // Owl Carousel
    $("#testimonialOwl").owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});

$(document).ready(function () {

    $("#blogOwl").owlCarousel({
        items: 4,
        margin: 20,
        loop: false,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

});



var nameError = document.getElementById('name-error');
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var msgError = document.getElementById("msg-error");
var submitError = document.getElementById('submit-error');
function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is requird';
        return false;
    }
    if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePhone() {
    var phone = document.getElementById('phone-number').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone number is requird';
        return false;
    }
    if (!phone.match(/^\d{11}$/)) {
        phoneError.innerHTML = "Phone number is invalid";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById('email-id').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is requird';
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailError.innerHTML = "Email is invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMsg() {
    var msg = document.getElementById('msg-id').value;
    var requird = 30;
    var left = requird - msg.length;
    if (left > 0) {
        msgError.innerHTML = left + " more character requird";
        return false;
    }
    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm() {
    if (!validateName(), !validatePhone(), !validateEmail(), !validateMsg()) {
        submitError.innerHTML = 'please fix error to submit'
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}





var footernameError = document.getElementById('footer-name-error');
var footerphoneError = document.getElementById("footer-phone-error");
var footeremailError = document.getElementById("footer-email-error");
var footermsgError = document.getElementById("footer-msg-error");
var submitfooterError = document.getElementById('submit-footer-error');

function validatefooterName() {
    var footername = document.getElementById('footer-contact-name').value;
    if (footername.length == 0) {
        footernameError.innerHTML = 'Name is requird';
        return false;
    }
    if (!footername.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        footernameError.innerHTML = "Write full name";
        return false;
    }
    footernameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatefooterPhone() {
    var footerphone = document.getElementById('footer-phone-number').value;
    if (footerphone.length == 0) {
        footerphoneError.innerHTML = 'Phone number is requird';
        return false;
    }
    if (!footerphone.match(/^\d{11}$/)) {
        footerphoneError.innerHTML = "Phone number is invalid";
        return false;
    }
    footerphoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatefooterEmail() {
    var footeremail = document.getElementById('footer-email-id').value;
    if (footeremail.length == 0) {
        footeremailError.innerHTML = 'Email is requird';
        return false;
    }
    if (!footeremail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        footeremailError.innerHTML = "Email is invalid";
        return false;
    }
    footeremailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatefooterMsg() {
    var footermsg = document.getElementById('footer-msg-id').value;
    var requird = 30;
    var left = requird - footermsg.length;
    if (left > 0) {
        footermsgError.innerHTML = left + " more character requird";
        return false;
    }
    footermsgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatefooterForm() {

    if (!validatefooterName() || !validatefooterPhone() || !validatefooterEmail() || !validatefooterMsg()) {

        submitfooterError.innerHTML = "Please fix errors before submitting";
        submitfooterError.style.display = "block";

        setTimeout(function () {
            submitfooterError.style.display = "none";
        }, 3000);

        return false;
    }
}
