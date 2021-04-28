'use strict'



/* ------------------------------------------------*/
/* ----- Menu Principal------------------------*/
/* ------------------------------------------------*/
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Menu desplegable en el caso de que la resolucion se de moviles */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.innerHTML = "&#9776;";
  } else {
    menu.classList.add("active");
    toggle.innerHTML = "&#9776;";
  }
}

/* Activa el submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Cierra el submenu */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);



/* ------------------------------------------------*/
/* ----- Slider pagina de Inicio -------------------*/
/* ------------------------------------------------*/

//Variables generales Slider

var slideIndex = 0;
var slides = document.getElementsByClassName("sliderSection");
//Configurar intervalos de tiempo
var conf_time;
//Tiempo en milisegundos
var time_slider = 5000;


//Muestra el indice
showSlides(slideIndex);
//Slider automatico
automaticSlides();



//---------------------------------------------------
//Puntos del slider
const dot = document.querySelectorAll('.dot')


//Recorre cada punto del slider y realiza una accion si se realiza click en alguno de ellos
for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener("click", function () {

    //Asigna la posicion actual
    slideIndex = i + 1
    //Asigna la posicion para mostrar el slider
    showSlides(slideIndex)
    //Limpia en tiempo es decir deja sin efecto el intervalo de tiempo
    clearInterval(conf_time)
    //Retoma el slider automatico una vez que se asigna la posicion
    conf_time = setInterval(automaticSlides, time_slider);

  });

}


//----------------------------------------------------

//Botones previo y siguiente
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')

try {
  prev.addEventListener('click', previousSlide)
  next.addEventListener('click', nextSlide)
} catch (error) {
  
}

function previousSlide() {

  slideIndex--
  if (slideIndex <= 0) {
    slideIndex = 3
  }
  showSlides(slideIndex)
  clearInterval(conf_time)
  conf_time = setInterval(automaticSlides, time_slider);

}


function nextSlide() {
  slideIndex++

  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  showSlides(slideIndex)
  clearInterval(conf_time)

  conf_time = setInterval(automaticSlides, time_slider);
}



//-------------------------------------------------------


//-----------------------------------------------------
function showSlides(n) {
try {
  
  var i;
  //Conseguir elemento con la clase dot
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
} catch (error) {
}

}


function automaticSlides() {
  
  if (slideIndex > slides.length) { slideIndex = 1 }
  slideIndex++;
  showSlides(slideIndex)
  clearInterval(conf_time)
  conf_time = setInterval((automaticSlides), time_slider); // Change image every 8 seconds
}


/* ------------------------------------------------*/
/* ----- Nav tabs de sponsors ---------------------*/
/* ------------------------------------------------*/

'use strict'
var tablinks = document.querySelectorAll(".tablinks")

var tabcontent = document.querySelectorAll(".tabcontent")


for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function () {
        
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }

        document.getElementById(tabcontent[i].id).style.display = "block"
        
        
    })
}


