var notibar = {
    enabled: true,
    text: `Due to circumstances, we have had to push the events back by 1 week. Please join our <a href="https://www.discord.gg/BPxAaPVuXG" target="_blank" style="color: #ffeb3b;">Discord</a> to keep updated.`,
    backgroundColor: "black",
    textColor: "white",
    height: "50px",
    fontSize: "16px",
    closeButton: true
};

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


document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('transcript-modal');
    const btn = document.getElementById('transcript-btn');
    const span = document.getElementsByClassName('close-btn')[0];

    btn.onclick = function () {
        modal.style.display = 'block';
    }

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
