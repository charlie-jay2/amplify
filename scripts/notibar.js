document.addEventListener('DOMContentLoaded', function () {
    fetch('notibar-config.json')
        .then(response => response.json())
        .then(notibar => {
            if (notibar.enabled) {
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

                notificationBar.innerHTML = notibar.text;

                var heroElement = document.querySelector('.hero');
                var closeButtonEnabled = notibar.closeButton;
                var heroMarginTop = closeButtonEnabled ? '90px' : '110px';

                if (closeButtonEnabled) {
                    var closeButton = document.createElement('span');
                    closeButton.innerHTML = '&times;';
                    closeButton.style.marginLeft = '20px';
                    closeButton.style.cursor = 'pointer';
                    closeButton.style.fontSize = '20px';
                    closeButton.onclick = function () {
                        notificationBar.style.display = 'none';
                        heroElement.style.marginTop = '110px'; // Adjust the margin-top when hidden
                    };
                    notificationBar.appendChild(closeButton);
                } else {
                    heroElement.style.marginTop = heroMarginTop; // Set initial margin-top
                }

                var navBar = document.querySelector('header nav');
                navBar.parentNode.insertBefore(notificationBar, navBar.nextSibling);

                if (closeButtonEnabled) {
                    heroElement.style.marginTop = heroMarginTop; // Set initial margin-top if close button is enabled
                }
            }
        })
        .catch(error => console.error('Error fetching notibar configuration:', error));
});
