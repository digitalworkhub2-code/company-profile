/*==========================================
Nature Safe General Maintenance LLC SPC
script.js - Part 1
==========================================*/

// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,.1)";

    } else {

        header.style.background = "#ffffff";
        header.style.boxShadow = "none";

    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Active Navigation

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section,.service-card,.vision-card,.why-card,.contact-card").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});
/*==========================================
script.js - Part 2
==========================================*/

// Back To Top Button

const backToTop = document.createElement("div");

backToTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

backToTop.style.cssText = `
position:fixed;
bottom:30px;
left:30px;
width:55px;
height:55px;
background:#0A4DA3;
color:#fff;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
font-size:22px;
box-shadow:0 10px 20px rgba(0,0,0,.2);
opacity:0;
visibility:hidden;
transition:.35s;
z-index:999;
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backToTop.style.opacity="1";
backToTop.style.visibility="visible";

}else{

backToTop.style.opacity="0";
backToTop.style.visibility="hidden";

}

});

backToTop.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*==========================
Gallery Hover Effect
==========================*/

const galleryImages=document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/*==========================
Button Ripple Effect
==========================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.offsetX-diameter/2}px`;

circle.style.top=`${e.offsetY-diameter/2}px`;

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/*==========================
Loading Animation
==========================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

console.log("Nature Safe Website Loaded Successfully");
