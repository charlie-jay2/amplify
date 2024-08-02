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

                if (notibar.closeButton) {
                    var closeButton = document.createElement('span');
                    closeButton.innerHTML = '&times;';
                    closeButton.style.marginLeft = '20px';
                    closeButton.style.cursor = 'pointer';
                    closeButton.style.fontSize = '20px';
                    closeButton.onclick = function () {
                        notificationBar.style.display = 'none';
                        document.querySelector('.hero').style.marginTop = '';
                    };
                    notificationBar.appendChild(closeButton);
                } else {
                    document.querySelector('.hero').style.marginTop = notibar.height;
                }

                var navBar = document.querySelector('header nav');
                navBar.parentNode.insertBefore(notificationBar, navBar.nextSibling);
            }
        })
        .catch(error => console.error('Error fetching notibar configuration:', error));
});
