const userScroll = () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 55) {
            navbar.classList.remove('navbar-scroll-background');
            navbar.classList.add('navbar-background');
        }
        else {
            navbar.classList.add('navbar-scroll-background');
            navbar.classList.remove('navbar-background');
        }
    });
}

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

// Event Listeners
document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('click', clickOutsideNavbar);