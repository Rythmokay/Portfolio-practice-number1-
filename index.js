// Get the "About" link and the about-popup element
const aboutLink = document.getElementById('about-link');
const aboutPopup = document.getElementById('about-popup');
const closePopupButton = document.getElementById('close-popup');

// Open the pop-up when the "About" link is clicked
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutPopup.style.display = 'block';
});

// Close the pop-up when the close button is clicked
closePopupButton.addEventListener('click', () => {
    aboutPopup.style.display = 'none';
});

// Close the pop-up when clicking outside the content area
window.addEventListener('click', (e) => {
    if (e.target === aboutPopup) {
        aboutPopup.style.display = 'none';
    }
});
