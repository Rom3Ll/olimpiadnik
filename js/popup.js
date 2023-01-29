// signin

let popupBg = document.querySelector(".popup__bg");
let popup = document.querySelector(".popup"); 
let openPopupButtons = document.querySelectorAll(".open-signin-popup"); 
let closePopupButton = document.querySelector(".close-signin-popup");


openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); 
    popupBg.classList.add("active"); 
    popup.classList.add("active");
  });
});

closePopupButton.addEventListener("click", () => {
  popupBg.classList.remove("active"); 
  popup.classList.remove("active"); 
});

document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  }
});

// signup

let popupSignupBg = document.querySelector(".popup_signup_bg");
let popupSignup = document.querySelector(".popup_signup");
let openSignupPopupButtons = document.querySelectorAll(".open-signup-popup");
let closeSignupPopupButton = document.querySelector(".close-signup-popup");

openSignupPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupSignupBg.classList.add("active");
    popupSignup.classList.add("active");
  });
});

closeSignupPopupButton.addEventListener("click", () => {
  popupSignupBg.classList.remove("active");
  popupSignup.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === popupSignupBg) {
    popupSignupBg.classList.remove("active");
    popupSignup.classList.remove("active");
  }
});