const form = document.querySelector('#combustible-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const distance = parseFloat(document.querySelector('#distance').value.replace(/,/g, ''));
  const price = parseFloat(document.querySelector('#price').value.replace(/,/g, ''));
  const consumption = parseFloat(document.querySelector('#consumption').value.replace(/,/g, ''));
  const cost = (distance / 100) * consumption * price;
  const resultDiv = document.querySelector('#result');
  resultDiv.innerHTML = `Result: The total cost of combustible used for ${distance.toLocaleString()} kilometers is ${cost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} Euros (€).`;
});

function CalculateNew() {
  //uncomment the lines: 14, 15, 16, 17, 19, 20 to display a message when the NEW SUMS button is clicked
    // var msg;
    // msg= " Recalculate?";
    // var agree=confirm(msg);
    // if (agree)
    return window.location.reload();
    // else
    // return false;
    }
