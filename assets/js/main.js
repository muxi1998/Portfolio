/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu') // add class show-menu to navMenu, so it will show the menu
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu') // remove class show-menu to navMenu, so it will hide the menu
    })
}


/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 