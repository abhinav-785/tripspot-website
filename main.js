// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("navigation-items");
// const menuBtnIcon = menuBtn.querySelector("i");

// menuBtn.addEventListener("click", (e) => {
//   navLinks.classList.toggle("open");

//   const isOpen = navLinks.classList.contains("open");
//   menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
// });

// navLinks.addEventListener("click", (e) => {
//   navLinks.classList.remove("open");
//   menuBtnIcon.setAttribute("class", "ri-menu-line");
// });

// const scrollRevealOption = {
//   origin: "bottom",
//   distance: "50px",
//   duration: 1000,
// };

// ScrollReveal().reveal(".header__image img", {
//   ...scrollRevealOption,
//   origin: "right",
// });
// ScrollReveal().reveal(".home .content p", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".home .content h1", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".header__btns", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// ScrollReveal().reveal(".destination__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });

// ScrollReveal().reveal(".showcase__image img", {
//   ...scrollRevealOption,
//   origin: "left",
// });
// ScrollReveal().reveal(".showcase__content h4", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".showcase__content p", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".showcase__btn", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// ScrollReveal().reveal(".banner__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });

// ScrollReveal().reveal(".journey__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });

// ScrollReveal().reveal(".discover__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });

// const swiper = new Swiper(".swiper", {
//   slidesPerView: 3,
//   spaceBetween: 20,
//   loop: true,
// });


// Initialize ScrollReveal
const sr = ScrollReveal({
  origin: 'top', // Animation starting point ('top', 'bottom', 'left', 'right')
  distance: '50px', // Distance the element moves
  duration: 1000, // Duration of the animation in milliseconds
  delay: 200, // Delay before the animation starts
  reset: true // Reset animation on scroll
});

// Apply ScrollReveal animations to specific sections
sr.reveal('.explore__image', { origin: 'left' }); // Reveal the explore image from the left
sr.reveal('.explore__content', { origin: 'right', delay: 400 }); // Reveal the explore content from the right

sr.reveal('.section__header', { interval: 200 }); // Reveal section headers
sr.reveal('.section__description', { delay: 300 }); // Reveal section descriptions

sr.reveal('.destination__card', { interval: 200 }); // Reveal each destination card sequentially

sr.reveal('.footer__col', { interval: 200 }); // Reveal footer columns sequentially
sr.reveal('.footer__bar', { delay: 500 }); // Reveal footer bar

console.log('ScrollReveal animations initialized successfully.');

sr.reveal('header .brand', { origin: 'left', delay: 300 });
sr.reveal('header .navigation', { origin: 'right', delay: 500 });

// ScrollReveal for the home section
sr.reveal('.home .video-slide', { origin: 'top', delay: 200, duration: 1500 });
sr.reveal('.home .content', { origin: 'bottom', delay: 400, duration: 1500 });

// ScrollReveal for the about section
sr.reveal('.showcase__image', { origin: 'left', delay: 300, duration: 1000 });
sr.reveal('.showcase__content h4', { origin: 'top', delay: 400 });
sr.reveal('.showcase__content p', { origin: 'right', interval: 200 }); // Sequentially reveals paragraphs
sr.reveal('.showcase__btn', { origin: 'bottom', delay: 600, duration: 800 });

console.log('Custom ScrollReveal animations initialized successfully.');

sr.reveal('.services__header', { origin: 'left', delay: 200 });
sr.reveal('.services__description', { origin: 'right', delay: 300 });
sr.reveal('.services__card', { interval: 200, origin: 'bottom' }); // Staggered animations for cards

// ScrollReveal for the discover section
sr.reveal('.discover__header', { origin: 'right', delay: 200 });
sr.reveal('.discover__description', { origin: 'left', delay: 300 });
sr.reveal('.discover__card', { interval: 200, origin: 'bottom' }); // Sequential animations for cards

console.log('ScrollReveal animations for Services and Discover sections initialized.');

sr.reveal('.section__header', { origin: 'left', delay: 100 });
sr.reveal('.section__description', { origin: 'right', delay: 200 });
sr.reveal('.client__card', {
  origin: 'bottom',
  interval: 200, // Animates each card sequentially
  duration: 1500, // Longer duration for smoother animation
});

// ScrollReveal for the banner section
sr.reveal('.banner__card', {
  origin: 'top',
  interval: 150, // Stagger animations for banner cards
  duration: 1000, // Shorter duration for a snappier effect
});

console.log('ScrollReveal animations for Client and Banner sections initialized.');