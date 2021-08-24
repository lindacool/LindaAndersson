const filter_btns = document.querySelectorAll(".filter-btn");

const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

//nav menu
function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

//change button on portfolio
filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});



function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}
const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["Developer", "Designer"]
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex < textArray[textArrayIndex].length){
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    // erase
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if(charIndex > 0){
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);

  }else {
    //type
    textArrayIndex++;
    if(textArrayIndex>=textArray.length)textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}
document.addEventListener("DOMContentLoaded", function(){
  setTimeout(type, newTextDelay + 250);
});



$(window).scroll(function(){
  if ($(this).scrollTop() > 900) {
      $(".scroll-button").fadeIn("slow");
  } else {
      $(".scroll-button").fadeOut("slow");
  }
});
$(".scroll-button").click(function(){
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});

// // Loader
// const loader = document.querySelector('.loader');
// const main = document.querySelector('.loading-main');

// function init() {
//   setTimeout(() => {
//     loader.style,opacity = 0;
//     loader.style.display = 'none';

//     main.style.display = 'block';
//     setTimeout(() => (main.style.opacity = 1, 50));

//   }, 4000);
// }

//   init();

    // //Animation cards
    // let animationCode = bodymovin.loadAnimation({
    //   container: document.getElementById('icon-code'),
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path:'code.json'
  
    // });

    //  //Animation cards
    //  let animationDesign = bodymovin.loadAnimation({
    //   container: document.getElementById('icon-design'),
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path:'design.json'
  
    // });

  //Animation cards
  let animation = bodymovin.loadAnimation({
    container: document.getElementById('icon-skills'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:'skills.json'

  });


  
