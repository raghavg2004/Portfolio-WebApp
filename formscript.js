// Get elements
const openModalButton = document.getElementById('openModalButton');
const contactModal = document.getElementById('contactModal');
const closeModalButton = document.getElementById('closeModalButton');
const serviceTiles = document.querySelectorAll('.service-tile');
const serviceInput = document.getElementById('service');
const contactForm = document.getElementById('contactForm');

// Open the modal when button is clicked
openModalButton.addEventListener('click', () => {
    contactModal.style.display = 'flex';
});

// Close the modal when 'X' button is clicked
closeModalButton.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// Toggle selected state for service tiles
serviceTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        // Remove 'selected' class from all tiles
        serviceTiles.forEach(t => t.classList.remove('selected'));

        // Add 'selected' class to clicked tile
        tile.classList.add('selected');

        // Set the hidden input value to the selected service
        serviceInput.value = tile.getAttribute('data-service');
    });
});