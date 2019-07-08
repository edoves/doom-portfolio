'use strict';

const headerNavBtn = document.querySelector('.header__navbtn');
const headerNavBtnClose = document.querySelector('.header__nav-close');

const hide = document.getElementById('hide');

headerNavBtn.addEventListener('click', function () {
    document.querySelector('.header__navigation').style.right = '0';
});

headerNavBtnClose.addEventListener('click', function () {
    document.querySelector('.header__navigation').style.right = '-32rem';
});

hide.addEventListener('click', function () {
    document.querySelector('#note').style.display = "none";
});


document.querySelector("#down").addEventListener("click", smoothScroll);

function smoothScroll() {
    window.scroll({
        top: 830,
        left: 0,
        behavior: "smooth"
    });
}

// window.addEventListener("scroll", () => {
//   const scrolled = window.scrollY;

//   console.log(scrolled);
// });