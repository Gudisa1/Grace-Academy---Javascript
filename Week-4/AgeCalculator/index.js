const calculateBtn = document.getElementById('calculate-btn');
const dobInput = document.getElementById('dob');
const resultDiv = document.getElementById('result');

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalButton = document.getElementById('modal-button');

function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}

modalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

calculateBtn.addEventListener('click', () => {
    const dob = new Date(dobInput.value);
    const now = new Date();

    if (isNaN(dob.getTime())) {
        showModal("Invalid Date", "Please enter a valid date of birth.");
        return;
    }

    if (dob > now) {
        showModal("Invalid Date", "Date of birth cannot be in the future.");
        return;
    }

    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    resultDiv.innerHTML = `
        <span class="result-item">You are <span>${years}</span> years,</span>
        <span class="result-item"><span>${months}</span> months,</span>
        <span class="result-item">and <span>${days}</span> days old.</span>
    `;
});
