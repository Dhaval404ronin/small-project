// Navbar js
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
      navbar.classList.toggle('active');
  }

  window.onscroll = () => {
      navbar.classList.remove('active');
  }
  // Dark Mode js
  let darkmode = document.querySelector('#darkmode');
// on click
  darkmode.onclick = () => {
      if(darkmode.classList.contains('bx-moon')){
          darkmode.classList.replace('bx-moon','bx-sun');
          document.body.classList.add('active');
      }else{
          darkmode.classList.replace('bx-sun','bx-moon');
          document.body.classList.remove('active');
      }
  }

  // for Scroll Reveal
  const sr = ScrollReveal ({
      origin: 'top',
      distance: '40px',
      duration: 1000, 
      reset: true
  });


  sr.reveal(`.home-text, .home-img,
              .about-img, .about-text,
              .box, .s-box,
              .btn, .connect-text,
              .contact-box`, {
      interval: 200
  })