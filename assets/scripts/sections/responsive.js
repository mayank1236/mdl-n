// Navbar toggle button
var tglBtn = document.querySelector('.burger');
var nav = document.querySelector('nav .nav-list');
var tglIcon = tglBtn.querySelector('img');

var toggleNav = false;
var togglePgNav = false;

tglBtn.addEventListener('click', () => {
    if(toggleNav) {
        tglIcon.src = "dist/images/icons/menu-burger.svg";
        nav.classList.remove('show-nav');
        toggleNav = false;
        
    } else {
        tglIcon.src = "dist/images/icons/cross.svg";
        nav.classList.add('show-nav');
        toggleNav = true;
    }
    
});

//Page-Nav Options list
// function pagenavList(btns) {
//     btns[0].classList.add('show');
// }

function pagenavTgl() {
    if(togglePgNav) {
        for(var i=0; i < btnItems.length; i++) {
            btnItems[i].classList.remove('show');
            togglePgNav = false;
        }
        selectedItem.style.display = 'none';
    } else {
        for(var i=0; i < btnItems.length; i++) {
            btnItems[i].classList.add('show');
            togglePgNav = true;
        }
    }
    return;
}
