//#region Functions
const userScroll = () => {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) {
        console.error("Navbar not found!");
        return;
    }

    if (window.innerWidth >= 320 && window.innerWidth <= 992) {
        navbar.classList.add('navbar-scroll-background-sm');
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 55) {
            // navbar.classList.remove('navbar-scroll-background');
            navbar.classList.add('navbar-scroll-background');
        } else {
            // navbar.classList.add('navbar-scroll-background');
            navbar.classList.remove('navbar-scroll-background');
            
            if (window.innerWidth > 992) {
                navbar.classList.remove('navbar-scroll-background-sm');
            }
        }
    });
}

const observer = new MutationObserver((mutations, obs) => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        userScroll();
        obs.disconnect();  // Зупинити спостереження після того, як navbar знайдено
    }
});

observer.observe(document.body, { childList: true, subtree: true });

function clickOutsideNavbar(event) {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNavDropdown');

    if (
        navbarCollapse.classList.contains('show') &&
        !navbarCollapse.contains(event.target) &&
        !navbarToggler.contains(event.target)
    ) {
        navbarToggler.click();
    }
}
//#endregion

//#region Event Listeners
document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('click', clickOutsideNavbar);
//#endregion