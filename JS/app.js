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



var nameError=document.getElementById('name-error');
var phoneError=document.getElementById("phone-error");
var emailError=document.getElementById("email-error");
var msgError=document.getElementById("msg-error");
var submitError=document.getElementById('submit-error');
function validateName(){
  var name = document.getElementById('contact-name').value;
  if(name.length == 0){
    nameError.innerHTML = 'Name is requird';
    return false;
  }
  if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
    nameError.innerHTML="Write full name";
    return false;
  }
  nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validatePhone(){
    var phone = document.getElementById('phone-number').value;
    if(phone.length == 0){
      phoneError.innerHTML = 'Phone number is requird';
      return false;
    }
    if(!phone.match(/^\d{11}$/)){
      phoneError.innerHTML="Phone number is invalid";
      return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
  function validateEmail(){
    var email = document.getElementById('email-id').value;
    if(email.length == 0){
      emailError.innerHTML = 'Email is requird';
      return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      emailError.innerHTML="Email is invalid";
      return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
function validateMsg(){
var msg = document.getElementById('msg-id').value;
var requird=30;
var left=requird-msg.length;
if (left>0) {
    msgError.innerHTML= left + " more character requird";
    return false;
}
msgError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(!validateName(),!validatePhone(), !validateEmail() , !validateMsg() ){
        submitError.innerHTML='please fix error to submit'
        setTimeout(function(){
            submitError.style.display='none';
        }, 3000);
        return false;
    }
}

 