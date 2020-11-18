const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const currDate = document.getElementById('currentDate');

const newYears = '19 Nov 2020';

const datenow = new Date();
const month = datenow.getMonth() + 1;
const today = datenow.getDate();

const vid = document.getElementById("myVideo");


function countdown ()
{
  const newYearsDate = new Date(newYears);
  console.log('new Year Date', newYearsDate);
  const currentDate = new Date();
  console.log('current date', currentDate);

  const totalseconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
  if (month === 11 && today === 19) {
    document.getElementById("removeAdd").classList.remove("hidden");
  } else {
    document.getElementById("removeAdd").classList.add("hidden");
    vid.autoplay = false;
    vid.load();
  }

  console.log(days, hours, minutes, seconds);
}

// initial call
countdown();

setInterval(countdown, 1000);