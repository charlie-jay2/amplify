const jobStatus = {
    job1: true,
    job2: true,
    job3: true
};

window.onload = function () {
    const jobElements = {
        job1: document.getElementById('st'),
        job2: document.getElementById('is'),
        job3: document.getElementById('ia')
    };

    const footerElement = document.querySelector('.footer');
    let allJobsClosed = true;

    for (let job in jobStatus) {
        if (jobStatus[job]) {
            jobElements[job].style.display = 'flex';
            allJobsClosed = false;
        } else {
            jobElements[job].style.display = 'none';
        }
    }

    if (allJobsClosed) {
        document.getElementById('vacancy-container').style.display = 'none';
        document.getElementById('no-vacancies-message').style.display = 'block';
        footerElement.style.marginTop = '390px';
    } else {
        footerElement.style.marginTop = '330px';
    }
};
