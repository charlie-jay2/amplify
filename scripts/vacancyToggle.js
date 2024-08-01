// JavaScript to toggle visibility of job vacancies
const jobStatus = {
    job1: true,  // Set to true if job is available, false if not
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

    // Check the job status and show/hide accordingly
    for (let job in jobStatus) {
        if (jobStatus[job]) {
            jobElements[job].style.display = 'flex';
            allJobsClosed = false;
        } else {
            jobElements[job].style.display = 'none';
        }
    }

    // Adjust footer margin based on job availability
    if (allJobsClosed) {
        document.getElementById('vacancy-container').style.display = 'none';
        document.getElementById('no-vacancies-message').style.display = 'block';
        footerElement.style.marginTop = '390px';
    } else {
        footerElement.style.marginTop = '330px';
    }
};
