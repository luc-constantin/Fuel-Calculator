const distanceInput = document.getElementById('distance');
const priceInput = document.getElementById('price');
const consumptionInput = document.getElementById('consumption');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');
const resetButton = document.getElementById('reset');

// Enable calculate button when all fields are filled
function checkFields() {
  if (distanceInput.value && priceInput.value && consumptionInput.value) {
	calculateButton.disabled = false;
	calculateButton.style.backgroundColor = "#9966ff";
  } else {
	calculateButton.disabled = true;
	calculateButton.style.backgroundColor = "#ccb3ff";
	calculateButton.style.color ="#000"
  }
}

// Calculate fuel consumption and display result
function calculate() {
  const distance = distanceInput.value;
  const price = priceInput.value;
  const consumption = consumptionInput.value;
  const fuel = distance / 100 * consumption;
  const cost = fuel * price;
  resultDiv.innerText = `You have consumed ${fuel.toFixed(2)} liters of fuel, which cost €${cost.toFixed(2)}.`;
  resetButton.style.display = "block";
}

// Reset form and hide reset button
function reset() {
  document.getElementById("distance").value = "";
  document.getElementById("price").value = "";
  document.getElementById("consumption").value = "";
  resultDiv.innerText = "";
  resetButton.style.display = "none";
  calculateButton.disabled = true;
  calculateButton.style.backgroundColor = "";
}

distanceInput.addEventListener('input', checkFields);
priceInput.addEventListener('input', checkFields);
consumptionInput.addEventListener('input', checkFields);
calculateButton.addEventListener('click', calculate);
resetButton.addEventListener('click', reset);



