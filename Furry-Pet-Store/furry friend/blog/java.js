document.addEventListener('DOMContentLoaded', function() {
    // Display a welcome message when the page loads
    alert('Welcome to our pet adoption blog!');

    // Get all social media links
    const socialLinks = document.querySelectorAll('footer a');

    // Add click event to each link
    socialLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default action
            event.preventDefault();

            // Confirm the user's action
            const isConfirmed = confirm('You are being redirected to our social media page. Continue?');

            // Redirect if confirmed
            if (isConfirmed) {
                window.location.href = this.getAttribute('href');
            }
        });
    });
});
