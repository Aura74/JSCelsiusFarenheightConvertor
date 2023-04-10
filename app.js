const tempF = document.querySelector(".degreesF");
const tempC = document.querySelector(".degreesC");

const tempOutput = document.querySelector(".temperature");

function convertTempF() {
  const celsius = ((tempC.value - 32) * 5) / 9;
  tempOutput.innerHTML = `${tempF.value}°F är ${celsius.toFixed(0)}°C`;
}

function convertTempC() {
  const fahrenheit = tempF.value * (9 / 5) + 32;
  tempOutput.innerHTML = `${tempC.value}°C är ${fahrenheit.toFixed(0)}°F`;
}
