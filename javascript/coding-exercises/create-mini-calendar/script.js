const day = document.getElementById('day');
const month = document.getElementById('month');
const date = document.getElementById('date');
const year = document.getElementById('year');

const today = new Date();

const daysOfTheMonth = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const monthOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

day.innerHTML = daysOfTheMonth[today.getDay()];
month.innerHTML = monthOfTheYear[today.getMonth()];
date.innerHTML = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
year.innerHTML = today.getFullYear();