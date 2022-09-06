// Events
window.onscroll = () => {
    stickyNav();
};

window.onresize = () => {
    updateVar();
};

// Variables
var navbar = document.getElementById("navbar");
var pageNav = document.getElementById("page-nav");
var btnItems = pageNav.querySelectorAll('.nav-item');
var btns = pageNav.getElementsByClassName("nav-link");
var highTech = document.getElementById('high-tech');
var pharmaTech = document.getElementById('pharma-tech');
var medTech = document.getElementById('med-tech');
var pnNext = document.querySelector(".pagenav-next");

// Page Nav selected item container
var selectedItem = document.querySelector('.page-nav .selected-item');

var pnHeight = Number(String(window.getComputedStyle(pageNav).getPropertyValue('height')).replace('px', ''));

var navHeight = Number(String(window.getComputedStyle(navbar).getPropertyValue('height')).replace('px', ''));
var direction = '';
var oldPos = 0;
var sticky = pageNav.offsetTop;
var scrollOffset = pnHeight;


// Funtions
function stickyNav() {
    var pagePos = window.pageYOffset;
    
    scrollDirection();
    activeBtn(pagePos);


    if(pagePos >= sticky) {
        pageNav.classList.add("sticky");
        pnNext.style.height = pnHeight + 20;
        showNavbar();
    } else {
        pageNav.classList.remove("sticky");
        pnNext.style.height = 0;
    }
}

function showNavbar() {
    

    if(direction == 'up') {
        // Scrolling up

        navbar.classList.remove("nav-up");
        navbar.classList.add("nav-down");

        pageNav.classList.remove("bounce-up");
        pageNav.classList.add("bounce-down");
        pageNav.style.top = navHeight + 'px';
    } else {
        // Scrolling down

        navbar.classList.remove("nav-down");
        navbar.classList.add("nav-up");

        pageNav.classList.remove("bounce-down");
        pageNav.classList.add("bounce-up");
        pageNav.style.top = 0;
    }
}

//change active button for pageNav depending on offset posiiton
function activeBtn(pagePos) {
    var height;

    for(var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
    }

    if(pagePos >= highTech.offsetTop - (pnHeight + navHeight)) {
        height = pnHeight + navHeight;
    }else {
        height = pnHeight;
    }

    if(pagePos >= highTech.offsetTop - height) {
        if(pagePos >= pharmaTech.offsetTop - height) {
            if(pagePos >= medTech.offsetTop - height) {
                btns[2].classList.add('active');
                // btns[1].classList.remove('active');
                btnItems[2].classList.add('show');
                // btnItems[1].classList.remove('show');
                // btnItems[0].classList.remove('show');
                console.log('med tech active');
                return;
            }
            
            btns[1].classList.add('active');
            // btns[0].classList.remove('active');
            btnItems[1].classList.add('show');
            // btnItems[0].classList.remove('show');
            // btnItems[2].classList.remove('show');
            console.log('pharma tech active');
            return;
        }
        
        btns[0].classList.add('active');
        btnItems[0].classList.add('show'); 
        // btnItems[1].classList.remove('show');
        // btnItems[2].classList.remove('show');
    } 
    return;
}

//scroll to the section of product whose name was clicked
function navScroll(sectionName) {
    let current = window.pageYOffset;

    switch(sectionName){
        case 'highTech': 
            scrollProduct(highTech.offsetTop, current);
            break;
        case 'pharmaTech': 
            scrollProduct(pharmaTech.offsetTop, current);
            break;
        case 'medTech': 
            scrollProduct(medTech.offsetTop, current);
            break;
    }

    togglePgNav = false;
}
 
function scrollProduct (offset, current) {
    if(offset < current) {
        scrollOffset = pnHeight + navHeight;
    } else {
        scrollOffset = pnHeight;
    }
    window.scrollTo(0, offset - scrollOffset);
}

//get in what direciton the user is scrolling
function scrollDirection() {
    var currentPos = window.pageYOffset;
    direction = (oldPos > currentPos) ? 'up' : 'down';
    oldPos = currentPos;
    return;
}

// Update Variables dependant on screen size
function updateVar() {
    if(window.pageYOffset > pnNext.offsetTop) {
        sticky = pnNext.offsetTop;
        console.log('active sticky');
    } else {
        sticky = pageNav.offsetTop;
    }

    navHeight = Number(String(window.getComputedStyle(navbar).getPropertyValue('height')).replace('px', ''));
    pnHeight = Number(String(window.getComputedStyle(pageNav).getPropertyValue('height')).replace('px', ''));
    
}