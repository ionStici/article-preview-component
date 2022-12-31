"use strict";

const btn = document.querySelector(".card__btn");
const shareBox = document.querySelector(".card__share__box");
const iconColor = document.querySelector(".card__btn__icon--color");

const on = function () {
    iconColor.style.fill = "#fff";
    btn.style.backgroundColor = "#6e8098";
    shareBox.classList.remove("card__share__box--disable");
};

const off = function () {
    iconColor.style.fill = "#6E8098";
    btn.style.backgroundColor = "#ecf2f8";
    shareBox.classList.add("card__share__box--disable");
};

let i = 1;

btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (i === 1) {
        on();
        i++;
    } else if (i !== 1) {
        off();
        i = 1;
    }
});
