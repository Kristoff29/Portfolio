

//circle skill


const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent= Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;
    
    for(let i = 0;i<dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }

})

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section')


function activeMenu(){
    let len= section.length;
    while(--len && window.scrollY + 97 <section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu;
window.addEventListener("scroll", activeMenu);

// stickey navbar //

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 50)
})

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}

document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll(".animate");
  
    function animateOnScroll() {
      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var position = section.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
  
        if (position < windowHeight - 100) {
          section.classList.add("show");
        } else {
          section.classList.remove("show");
        }
      }
    }
  
    animateOnScroll();
  
    window.addEventListener("scroll", animateOnScroll);
  });
  