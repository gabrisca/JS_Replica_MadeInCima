// * access to an element
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let query = (query) => document.querySelector(query);

// * Selectors
const myLinks = classes('link');
// const openDropdown = classes("with_dropdown");
// const dropdown = classes("dropdown");
const chevron = query('i');


// * Functions

// funzione che aggiunge e rimuove una classe all'hover sui links
function addClassToLinks(links, classe) {
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", function () {
      this.classList.add(classe)
    });
    links[i].addEventListener("mouseleave", function () {
      this.classList.remove(classe)
    });
  }
}

// funzione che, quando viene richiamata onclick, aggiunge e toglie la classe show e ruota lo chevron
function myDropdown(idEl) {
  console.log('click');
  this.document.getElementById(idEl).classList.toggle("show");
  chevron.classList.toggle("rotate")
}

// funzione che chiude i dropdwon al click al di fuori di essi e riposiziona lo chevron
window.onclick = function (e) {
  if (!e.target.matches('.dropit')) {
    var myDropdown = document.getElementById("dropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
      chevron.classList.remove("rotate")
    }
  }
}