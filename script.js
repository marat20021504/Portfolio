const menu = document.querySelector(".menu")
const active = document.querySelector(".active")
const ul = document.querySelector(".ul")

menu.addEventListener("click", function() {
    ul.classList.toggle("active")
})
