function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const isAm = hours < 12;

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  document.querySelector('.hours .digit-top').innerHTML = hours.toString().padStart(2, '0');
  document.querySelector('.hours .digit-bottom').innerHTML = hours.toString().padStart(2, '0');

  document.querySelector('.minutes .digit-top').innerHTML = minutes.toString().padStart(2, '0');
  document.querySelector('.minutes .digit-bottom').innerHTML = minutes.toString().padStart(2, '0');

  document.querySelector('.seconds .digit-top').innerHTML = seconds.toString().padStart(2, '0');
  document.querySelector('.seconds .digit-bottom').innerHTML = seconds.toString().padStart(2, '0');

  document.getElementById('am').style.visibility = isAm ? 'visible' : 'hidden';
  document.getElementById('pm').style.visibility = isAm ? 'hidden' : 'visible';

  playFlipSound(); // Play sound on every second change
}
