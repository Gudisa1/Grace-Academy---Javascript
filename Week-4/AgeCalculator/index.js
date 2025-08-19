const birthdateInput = document.getElementById("birthdate");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const birthdateValue = birthdateInput.value;
  
  if (!birthdateValue) {
    alert("Please enter your birthdate.");
    return;
  }

  const birthDate = new Date(birthdateValue);
  const today = new Date();

  if (birthDate > today) {
    alert("Birthdate cannot be in the future!");
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust for negative months or days
  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  resultDiv.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});