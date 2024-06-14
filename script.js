const calcInput = document.getElementById('calc-input');
const calcOutput = document.getElementById('calc-output');
const clickSound = document.getElementById('clickSound');

let calculatorOn = true; // Flag to track calculator state

// Add event listeners to all keys
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.textContent;
        
        // Play click sound
        clickSound.currentTime = 0;
        clickSound.play();

        if (!calculatorOn && keyValue !== 'C' && keyValue !== 'ON/OFF') {
            return; // If calculator is off, do not process keys except C and ON/OFF
        }

        switch (keyValue) {
            case 'ON/OFF':
                calculatorOn = !calculatorOn;
                if (!calculatorOn) {
                    calcInput.value = '';
                    calcOutput.textContent = 'Calculator OFF';
                } else {
                    calcOutput.textContent = 'Enter calculation:';
                }
                break;
            case 'C':
                calcInput.value = '';
                calcOutput.textContent = 'Enter calculation:';
                break;
            case '=':
                calcOutput.textContent = '42'; // Always return 42 on equals
                calcInput.value = ''; // Clear input field
                break;
            default:
                calcInput.value += keyValue; // Append key value to input
                break;
        }
    });
});
