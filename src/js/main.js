$(document).ready(function () {
    $('.slider').slick({
        vertical: true,
        arrows: false,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinity: false,
    });
});

document.getElementsByClassName("form-joinus")[0].addEventListener('click', function () {
    document.getElementsByClassName('form__registration')[0].style.display = "flex";
    document.getElementsByClassName('form__login')[0].style.display = "none";
});
document.getElementsByClassName("form-signin")[0].addEventListener('click', function () {
    document.getElementsByClassName('form__registration')[0].style.display = "none";
    document.getElementsByClassName('form__login')[0].style.display = "flex";
});

document.getElementsByClassName("registration__button")[0].addEventListener('click', function () {
    console.log("mail: " + document.getElementsByClassName('registration__mail')[0].value)
    console.log("name: " + document.getElementsByClassName('registration__name')[0].value)
    console.log("num: " + document.getElementsByClassName('registration__num')[0].value)
    console.log("pass: " + document.getElementsByClassName('registration__pass')[0].value)
});
document.getElementsByClassName("login__button")[0].addEventListener('click', function () {
    console.log("name: " + document.getElementsByClassName('login__name')[0].value)
    console.log("pass: " + document.getElementsByClassName('login__pass')[0].value)
});

document.getElementsByClassName('ass')[0].addEventListener('click', function () {
     if (this.checked){
        
        document.getElementsByClassName('form__registration')[0].style.display = "none";
        document.getElementsByClassName('form__login')[0].style.display = "flex";
     }else{
        document.getElementsByClassName('form__registration')[0].style.display = "flex";
        document.getElementsByClassName('form__login')[0].style.display = "none";
     }
});