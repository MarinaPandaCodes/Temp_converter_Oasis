function convertTemperature() {
  // Get input temperature value and unit
  const inputTemperature = parseFloat(
    document.getElementById('inputTemperature').value
  );
  const inputUnit = document.getElementById('inputUnit').value;

  let celsius, fahrenheit, kelvin;

  // Convert the input temperature to all units
  if (inputUnit === 'celsius') {
    celsius = inputTemperature;
    fahrenheit = (inputTemperature * 9) / 5 + 32;
    kelvin = inputTemperature + 273.15;
  } else if (inputUnit === 'fahrenheit') {
    celsius = ((inputTemperature - 32) * 5) / 9;
    fahrenheit = inputTemperature;
    kelvin = ((inputTemperature - 32) * 5) / 9 + 273.15;
  } else if (inputUnit === 'kelvin') {
    celsius = inputTemperature - 273.15;
    fahrenheit = ((inputTemperature - 273.15) * 9) / 5 + 32;
    kelvin = inputTemperature;
  } else {
    alert('Please select a valid unit');
    return;
  }

  // Display the results
  document.getElementById('result').innerHTML = `<p>${celsius.toFixed(2)} °C</p>
         <p>${fahrenheit.toFixed(2)} °F</p>
         <p>${kelvin.toFixed(2)} K</p>`;
}
