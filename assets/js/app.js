window.addEventListener('load' , () => {
  const preload = document.querySelector('.preload');
  setTimeout(() => {
      preload.classList.add('preload-finish');
  },1400)
  
  });

//==================================NAVBAR=====================================================================//
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ");
const navbarLinks = document.querySelectorAll(".site-link");
const navbarImg = document.querySelector(".site-branding");

const root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)


navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
  
  navbarImg.classList.toggle("close-img");
  root.classList.toggle("open");
}


navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if(navbarMenu.classList.contains("open")) {
    navbarToggler.click();

  }
}