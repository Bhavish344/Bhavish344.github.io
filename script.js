const lengthRange = document.getElementById('lengthRange');
const lengthValue = document.getElementById('lengthValue');
const includeSymbols = document.getElementById('includeSymbols');
const includeNumbers = document.getElementById('includeNumbers');
const onlyAlphabets = document.getElementById('onlyAlphabets');
const passwordDisplay = document.getElementById('passwordDisplay');
const copyBtn = document.getElementById('copyBtn');

const generateBtn = document.getElementById('generateBtn');

// Update the displayed password length when the slider is moved
lengthRange.addEventListener('input', () => {
    lengthValue.textContent = lengthRange.value;
});

// Generate a random password based on the user's settings
generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthRange.value);
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (includeNumbers.checked) {
        characters += '0123456789';
    }

    if (includeSymbols.checked) {
        characters += '!@#$%^&*()_+[]{}|;:,.<>?';
    }

    if (onlyAlphabets.checked) {
        characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordDisplay.value = password;
});

// Copy password to clipboard
copyBtn.addEventListener('click', () => {
    passwordDisplay.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});
