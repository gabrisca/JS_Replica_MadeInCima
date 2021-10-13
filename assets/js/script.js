//////////////////////////////////////////////////////

// * access to an element
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let query = (query) => document.querySelector(query);
let queryAll = (query) => document.querySelectorAll(query);

//////////////////////////////////////////////////////

//////////////////////////////////////////////////////

// * Selectors
// DROPDOWN MENU
const chevron = query('i');

// HAMBURGER MENU
const menuItems = queryAll(".menuItem"),
      menu = query(".hamburger_menu"),
      hamburger = query(".hamburger"),
      closeIcon= query(".my_closed"),
      menuIcon = query(".my_hamburger");

// NAVBAR
const nav = query('nav');
let lastScrollY = window.scrollY;
//////////////////////////////////////////////////////

// * Events

// HAMBURGER MENU
hamburger.addEventListener("click", toggleMenu);
menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

// HIDE NAVBAR ON SCROLLDOWN
window.addEventListener('scroll', () => {
  if(lastScrollY < window.scrollY) {
    console.log('scroll down');
    nav.classList.add('hideNav');
  } else {
    console.log('scroll up');
    nav.classList.remove('hideNav');
  }
  lastScrollY = window.scrollY
})

//////////////////////////////////////////////////////

// * Functions

// DROPDOWN MENU
// funzione che, quando viene richiamata onclick, aggiunge e toglie la classe show e ruota lo chevron
function myDropdown(idEl) {
  this.document.getElementById(idEl).classList.toggle("show");
  chevron.classList.toggle("rotate")
}

// funzione che chiude i dropdwon al click al di fuori di essi e riposiziona lo chevron
window.onclick = function (e) {
  if (!e.target.matches('.dropit')) {
    let myDropdown = document.getElementById('dropdown');
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
      chevron.classList.remove("rotate")
    }
  }
}

// HAMBURGER MENU
// funzione che al click aggiunge e toglie le classi showMenu e hideMenu
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menu.classList.add("hideMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.remove("hideMenu");
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}