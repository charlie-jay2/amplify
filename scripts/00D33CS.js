document.addEventListener('DOMContentLoaded', (event) => {
    // Get the current URL
    let currentUrl = window.location.href;

    // Check if the URL ends with .html but not .pdf
    if (currentUrl.endsWith('.html') && !currentUrl.endsWith('.pdf')) {
        // Remove the .html part from the URL
        let newUrl = currentUrl.replace('.html', '');

        // Redirect to the new URL
        window.location.replace(newUrl);
    }
});
