document.getElementById("convertBtn").addEventListener("click", function () {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("from-unit").value;
  const toUnit = document.getElementById("to-unit").value;
  const resultField = document.getElementById("result");

  if (isNaN(temperature)) {
    resultField.textContent = "Please enter a valid number.";
    return;
  }

  let result;
  if (fromUnit === toUnit) {
    result = temperature; // No conversion needed if units are the same
  } else if (fromUnit === "celsius") {
    result =
      toUnit === "fahrenheit"
        ? (temperature * 9) / 5 + 32
        : toUnit === "kelvin"
        ? temperature + 273.15
        : temperature;
  } else if (fromUnit === "fahrenheit") {
    result =
      toUnit === "celsius"
        ? ((temperature - 32) * 5) / 9
        : toUnit === "kelvin"
        ? ((temperature - 32) * 5) / 9 + 273.15
        : temperature;
  } else if (fromUnit === "kelvin") {
    result =
      toUnit === "celsius"
        ? temperature - 273.15
        : toUnit === "fahrenheit"
        ? ((temperature - 273.15) * 9) / 5 + 32
        : temperature;
  }

  resultField.textContent = `${result.toFixed(2)} °${toUnit
    .charAt(0)
    .toUpperCase()}`;
});
