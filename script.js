// Theme Toggle with localStorage
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', currentTheme);
    
    // Add animation
    themeToggle.classList.add('shake');
    setTimeout(() => {
        themeToggle.classList.remove('shake');
    }, 500);
});

// Book button animation
const bookButtons = document.querySelectorAll('.book-btn');
bookButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Add animation
        this.classList.add('shake');
        
        // Simulate booking process
        setTimeout(() => {
            alert('Room added to your cart!');
            this.classList.remove('shake');
            this.textContent = 'Booked!';
            this.style.backgroundColor = '#4CAF50';
            
            // Store booking in localStorage
            const roomType = this.closest('.room-info').querySelector('h3').textContent;
            localStorage.setItem('lastBooking', roomType);
        }, 500);
    });
});

// Check for previous booking
document.addEventListener('DOMContentLoaded', () => {
    const lastBooking = localStorage.getItem('lastBooking');
    if (lastBooking) {
        console.log(`Welcome back! You last booked: ${lastBooking}`);
    }
});

// Hero button animation
const heroBtn = document.querySelector('.hero .btn');
setInterval(() => {
    heroBtn.classList.toggle('pulse');
}, 4000);