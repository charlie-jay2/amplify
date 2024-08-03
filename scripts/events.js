let eventSoon = false;
let doorsClosed = false;
let noEvent = false;

function handleEventSoon() {
  const aopening = document.querySelector('.aopening');
  aopening.style.marginLeft = '50px';

  const eventInfo = document.createElement('section');
  eventInfo.classList.add('einfo');
  eventInfo.innerHTML = `
    <h2>The event at Amplify is starting soon.</h2>
    <p>Join the game here: 
      <a href="https://www.roblox.com/games/16919071746/finlay550s-Place-Number-545" target="_blank">ENTER</a><br />
      Make sure to provide your ticket upon the door to gain access.
    </p>
    <br />
    <p>The event will open at 12pm and officially start at 12:15pm.</p>
  `;

  document.body.appendChild(eventInfo);

  const einfoStyle = document.createElement('style');
  einfoStyle.innerHTML = `
    .einfo {
      text-align: center;
      margin-top: -800px;
      margin-left: 500px;
      font-family: "aileron-heavy";
    }
  `;
  document.head.appendChild(einfoStyle);
}

function handleDoorsClosed() {
  const aopening = document.querySelector('.aopening');
  aopening.style.marginLeft = '50px';

  const eventInfo = document.createElement('section');
  eventInfo.classList.add('einfo');
  eventInfo.innerHTML = `
    <h2>The event has now started and the doors are now closed.</h2>
    <p>Thanks for attending.</p>
  `;

  document.body.appendChild(eventInfo);

  const einfoStyle = document.createElement('style');
  einfoStyle.innerHTML = `
    .einfo {
      text-align: center;
      margin-top: -700px;
      margin-left: 500px;
      font-family: "aileron-heavy";
    }
  `;
  document.head.appendChild(einfoStyle);
}

function handleNoEvent() {
  const aopeningImages = document.querySelectorAll('.aopening');
  aopeningImages.forEach(image => {
    image.style.display = 'none';
  });

  const noEventMessage = document.createElement('div');
  noEventMessage.classList.add('no-event-message');
  noEventMessage.innerHTML = `
    <h2>There is currently no upcoming events, please check back later.</h2>
  `;

  const footer = document.querySelector('.footer');
  document.body.insertBefore(noEventMessage, footer);

  const noEventStyle = document.createElement('style');
  noEventStyle.innerHTML = `
    .no-event-message {
      text-align: center;
      margin-top: -50px;
      font-family: "aileron-heavy";
    }

    .footer {
      margin-top: 450px;
    }
  `;
  document.head.appendChild(noEventStyle);
}

if (noEvent) {
  handleNoEvent();
} else if (doorsClosed) {
  handleDoorsClosed();
} else if (eventSoon) {
  handleEventSoon();
}
