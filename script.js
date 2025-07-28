let historyBox = document.getElementById('history');
let resultBox = document.getElementById('result');

function appendValue(val) {
  resultBox.value += val;
}

function clearDisplay() {
  resultBox.value = '';
  historyBox.innerText = '';
}

function backspace() {
  resultBox.value = resultBox.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = resultBox.value;
    let answer = eval(expression);
    historyBox.innerText = expression;
    resultBox.value = answer;
  } catch {
    resultBox.value = "Error";
  }
}

// ✅ Keyboard Support
document.addEventListener('keydown', function(event) {
  if (event.key >= '0' && event.key <= '9' || ['+', '-', '*', '/', '.','%'].includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Backspace') {
    backspace();
  } else if (event.key === 'Escape') {
    clearDisplay();
  }
});
