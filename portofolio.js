var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Pro Gamer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



//Navbar Toggle Button

const toggleButton = document.getElementsByClassName('toggle')[0];
const navbarItem = document.getElementsByClassName('navbar-item');
toggleButton.addEventListener('click', function(){
    for(let i = 0; i < navbarItem.length; i++) {
        navbarItem[i].classList.toggle('active');
    }
});