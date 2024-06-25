let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').innerText = '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').innerText = currentInput;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}


let isDarkMode = false;

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').innerText = currentInput;
}

// Other functions (clearDisplay, calculateResult)

// Toggle dark mode
const toggleDarkModeButton = document.querySelector('.toggle-dark-mode');
toggleDarkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  // Update display and button colors based on dark mode state
});


//Code  Explanation:
// This JavaScript code includes three functions:

// appendToDisplay(value):
// This function is called when a button is clicked, and it appends the clicked button value to the currentInput variable and updates the display accordingly.

// clearDisplay():
// This function is called when the "C" button is clicked, and it clears the current input and resets the display to '0'.

// calculateResult():
// This function is called when the "=" button is clicked. It attempts to evaluate the expression in currentInput using eval() and displays the result. If an error occurs during evaluation, it displays 'Error' on the display.