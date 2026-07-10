// ==========================
// Nature Safe Website Script
// ==========================

// Fade In Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll("section,.card,.why-box div").forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});


// Active Menu on Scroll
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// Header Shadow
const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.25)";

}else{

header.style.boxShadow="0 5px 15px rgba(0,0,0,.15)";

}

});


// Button Click Animation
document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(){

this.style.transform="scale(.96)";

setTimeout(()=>{

this.style.transform="";

},150);

});

});


// Console Message
console.log("Nature Safe General Maintenance LLC SPC");
console.log("Website Developed Successfully");
