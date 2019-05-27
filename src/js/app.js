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
