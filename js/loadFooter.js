const getPath = (path) => {
    return window.location.pathname.includes('/pages/') ? `../${path}` : `./${path}`;
};
    
const loadFooter = async () => {
    const response = await fetch(getPath('components/footer.html'));
    const footerHTML = await response.text();
        
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', loadFooter);