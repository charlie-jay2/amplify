document.addEventListener('DOMContentLoaded', (event) => {
    // Get the current URL
    let currentUrl = window.location.href;

    // Check if the URL ends with .html
    if (currentUrl.endsWith('.html')) {
        // Remove the .html part from the URL
        let newUrl = currentUrl.replace('.html', '');

        // Redirect to the new URL
        window.location.replace(newUrl);
    }
});
