// Ambil elemen tombol dan layar kalkulator
const calculatorKeys = document.querySelector('.calculator-keys');
const calculatorScreen = document.querySelector('.calculator-screen');

// Atur nilai awal
let prevValue = '';
let calculationOperator = '';
let currentValue = '0';

// Fungsi update layar
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// Fungsi untuk memproses persamaan
const calculate = () => {
  let result = '';
  switch(calculationOperator) {
    case '+':
      result = parseFloat(prevValue) + parseFloat(currentValue);
      break;
    case '-':
      result = parseFloat(prevValue) - parseFloat(currentValue);
      break;
    case '*':
      result = parseFloat(prevValue) * parseFloat(currentValue);
      break;
    case '/':
      result = parseFloat(prevValue) / parseFloat(currentValue);
      break;
    case '%':
      result = parseFloat(prevValue) % parseFloat(currentValue);
      break;
    default:
      break;
  }
  currentValue = result;
  calculationOperator = '';
};

// Fungsi untuk menekan tombol operator
const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevValue = currentValue;
  } else {
    calculate();
  }
  calculationOperator = operator;
  currentValue = '0';
};

// Fungsi untuk menekan tombol angka
const inputNumber = (number) => {
  if (currentValue === '0') {
    currentValue = number;
  } else {
    currentValue += number;
  }
};

// Tambahkan event listener untuk tombol
calculatorKeys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    inputOperator(target.value);
    updateScreen(currentValue);
    return;
  }
  if (target.classList.contains('number')) {
    inputNumber(target.value);
    updateScreen(currentValue);
    return;
  }
  if (target.classList.contains('decimal')) {
    if (!currentValue.includes('.')) {
      currentValue += '.';
    }
    updateScreen(currentValue);
    return;
  }
  if (target.classList.contains('all-clear')) {
    prevValue = '';
    calculationOperator = '';
    currentValue = '0';
    updateScreen(currentValue);
    return;
  }
  if (target.classList.contains('equal-sign')) {
    calculate();
    updateScreen(currentValue);
    return;
  }
});
