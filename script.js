"use strict";

const btn = document.querySelector(".card__btn");
const shareBox = document.querySelector(".card__share__box");
const iconColor = document.querySelector(".card__btn__icon--color");
const iconShare = document.querySelector(".card__btn__icon");
const iconBtns = document.querySelectorAll(".card__share__icon");

iconBtns.forEach((btn) =>
    btn.addEventListener("click", function () {
        if (btn.classList.contains("facebook"))
            window.open("https://www.facebook.com/", "_blank");

        if (btn.classList.contains("twitter"))
            window.open("https://twitter.com/", "_blank");

        if (btn.classList.contains("pinterest"))
            window.open("https://www.pinterest.com/", "_blank");
    })
);

const on = function () {
    iconColor.style.fill = "#fff";
    btn.style.backgroundColor = "#6e8098";
    shareBox.classList.remove("card__share__box--disable");
    iconShare.classList.add("card__btn__icon--mobile-active");
};

const off = function () {
    iconColor.style.fill = "#6E8098";
    btn.style.backgroundColor = "#ecf2f8";
    shareBox.classList.add("card__share__box--disable");
    iconShare.classList.remove("card__btn__icon--mobile-active");
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
