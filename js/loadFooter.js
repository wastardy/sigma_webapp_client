const loadFooter = async () => {
    const response = await fetch(getPath('components/footer.html'));
    const footerHTML = await response.text();
        
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', loadFooter);