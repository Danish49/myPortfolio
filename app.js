// dom elements
const menuBtn = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".mobile-navbar");
const navLinks = document.querySelectorAll(".link");


menuBtn.addEventListener("click" , ()=>{
mobilenav.classList.toggle("mobile-navbar-pressed")
})


  