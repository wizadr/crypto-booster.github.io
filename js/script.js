/********* update date ********/
var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

window.onload = function () {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
  
    $('#date').text(`${day}/${month+1}/${year}`);
};

/********* sticky header ********/
$(window).scroll(function () {
    if ($(window).scrollTop() > 5) {
        $("header").addClass("stick");
    } else {
        $("header").removeClass("stick");
    }
});


$(document).ready(function () {
    //counter animation
    $('.counter').countUp({
        'time': 2000,
        'delay': 10
    });
    
    /********* go back to top ********/
    $('#backToTop').gotop();

    /********* aos animations ********/
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: false
    });
});



