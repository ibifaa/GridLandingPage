var hamburger= document.querySelector(".hamburger");
var links = document.querySelector(".nav-menu")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    links.classList.toggle("active")

})

document.querySelectorAll(".nav-link").forEach(n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    links.classList.remove("active");
}))