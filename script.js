
const form = document.getElementById('eventForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');


function isNotEmpty(value) {
  return value.trim() !== '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isStrongPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}


function validateName() {
  if (!isNotEmpty(nameInput.value)) {
    nameError.textContent = 'Name cannot be empty.';
    return false;
  }
  nameError.textContent = '';
  return true;
}

function validateEmail() {
  if (!isNotEmpty(emailInput.value)) {
    emailError.textContent = 'Email cannot be empty.';
    return false;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email.';
    return false;
  }
  emailError.textContent = '';
  return true;
}

function validatePassword() {
  if (!isNotEmpty(passwordInput.value)) {
    passwordError.textContent = 'Password cannot be empty.';
    return false;
  } else if (!isStrongPassword(passwordInput.value)) {
    passwordError.textContent = 'Password must have at least 6 characters, including letters and numbers.';
    return false;
  }
  passwordError.textContent = '';
  return true;
}


nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);


form.addEventListener('submit', event => {
  const nameValid = validateName();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();

  if (!nameValid || !emailValid || !passwordValid) {
    event.preventDefault(); 
  } else {
    alert('Registration successful! Thank you for signing up.');
  }
});



const modeToggleBtn = document.getElementById('modeToggleBtn');
modeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});



const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});



const countBtn = document.getElementById('countBtn');
let count = 0;

countBtn.addEventListener('click', () => {
  count++;
  countBtn.textContent = `Clicked ${count} times`;
});
