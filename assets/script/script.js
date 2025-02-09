function calculateDays() {
    const birthdayInput = document.getElementById('birthday');
    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');

    errorElement.style.display = 'none';

    if (!birthdayInput.value) {
        errorElement.style.display = 'block';
        resultElement.textContent = ''; 
        return;
    }

    const userBirthday = new Date(birthdayInput.value);
    const currentDate = new Date();
    userBirthday.setFullYear(currentDate.getFullYear());

    if (userBirthday < currentDate) {
        userBirthday.setFullYear(currentDate.getFullYear() + 1);
    }

    const timeDifference = userBirthday - currentDate;
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));

    let dayWord = 'день';
    if (daysLeft % 10 === 1 && daysLeft % 100 !== 11) {
        dayWord = 'день';
    } else if (daysLeft % 10 >= 2 && daysLeft % 10 <= 4 && !(daysLeft % 100 >= 12 && daysLeft % 100 <= 14)) {
        dayWord = 'дня';
    } else {
        dayWord = 'дней';
    }

    resultElement.textContent = `До вашего дня рождения осталось ${daysLeft} ${dayWord}.`;
}