function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  document.querySelector('.hours .digit-top').innerHTML = hours.toString().padStart(2, '0');
  document.querySelector('.hours .digit-bottom').innerHTML = hours.toString().padStart(2, '0');
  
  document.querySelector('.minutes .digit-top').innerHTML = minutes.toString().padStart(2, '0');
  document.querySelector('.minutes .digit-bottom').innerHTML = minutes.toString().padStart(2, '0');
  
  document.querySelector('.seconds .digit-top').innerHTML = seconds.toString().padStart(2, '0');
  document.querySelector('.seconds .digit-bottom').innerHTML = seconds.toString().padStart(2, '0');
}

setInterval(updateClock, 1000);

