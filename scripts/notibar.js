// notibar.js

// Define your notification settings here
var notibar = {
    enabled: true, // Set to true to enable the notification bar
    text: `Due to circumstances, we have had to push the events back by 1 week. Please join our <a href="https://www.discord.gg/BPxAaPVuXG" target="_blank" style="color: #ffeb3b;">Discord</a> to keep updated.`,
    backgroundColor: "black",
    textColor: "white",
    height: "50px",
    fontSize: "16px",
    closeButton: true // Set to true to include a close button
};

if (notibar.enabled) {
    // Create the notification bar
    var notificationBar = document.createElement('div');
    notificationBar.style.backgroundColor = notibar.backgroundColor;
    notificationBar.style.color = notibar.textColor;
    notificationBar.style.textAlign = 'center';
    notificationBar.style.padding = '10px';
    notificationBar.style.height = notibar.height;
    notificationBar.style.lineHeight = notibar.height;
    notificationBar.style.fontSize = notibar.fontSize;
    notificationBar.style.width = '100%';
    notificationBar.style.boxSizing = 'border-box';

    // Add the text to the notification bar
    notificationBar.innerHTML = notibar.text;

    // Add a close button if enabled
    if (notibar.closeButton) {
        var closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;';
        closeButton.style.marginLeft = '20px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.fontSize = '20px';
        closeButton.onclick = function () {
            notificationBar.style.display = 'none';
            document.querySelector('.hero').style.marginTop = ''; // Reset the margin when closed
        };
        notificationBar.appendChild(closeButton);
    } else {
        // If close button is not enabled, adjust the main content margin
        document.querySelector('.hero').style.marginTop = notibar.height;
    }

    // Insert the notification bar after the navigation bar
    var navBar = document.querySelector('header nav');
    navBar.parentNode.insertBefore(notificationBar, navBar.nextSibling);
}
