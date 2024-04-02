let inputDate = document.getElementById('date');
let result = document.getElementById('result');

inputDate.max = new Date().toISOString().split('T')[0];

const calculateAge = () => {
    let birthDate = new Date(inputDate.value);

    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth() + 1;
    let birthDay  = birthDate.getDate();

    let today = new Date();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();

    let resultYear, resultMonth, resultDay;

    resultYear = currentYear - birthYear;

    if (currentMonth >= birthMonth) {
        resultMonth = currentMonth - birthMonth;
    } else {
        resultYear--;
        resultMonth = 12 + currentMonth - birthMonth;
    }

    if (currentDay >= birthDay) {
        resultDay = currentDay - birthDay;
    } else {
        resultMonth--;
        resultDay = getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay;
    }

    if (resultMonth < 0) {
        resultMonth = 11;
        resultYear--;
    }

    result.innerText = `You are ${resultYear} years, ${resultMonth} months and ${resultDay} days old.`;
}

const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate()
}