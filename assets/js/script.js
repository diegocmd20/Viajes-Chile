const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
    $("#submit-button").click(function () {
        alert("Tu mensaje ha sido recibido");
    });
    $(window).scroll(function () {
        if ($("#navbar-section").offset().top > 100) {
            $("#navbar-section").addClass("bg-dark");
            $("#navbar-section").removeClass("bg-transparent");
        } else {
            $("#navbar-section").removeClass("bg-dark");
        }
    });
    $("#scroll-button").click(function () {
        let subOffset = $(".subtitle").offset().top;
        let navbarHeight = $("#navbar-section").outerHeight();
        $('html, body').animate({
            scrollTop: subOffset - navbarHeight - 20
        }, 500);
    });
});