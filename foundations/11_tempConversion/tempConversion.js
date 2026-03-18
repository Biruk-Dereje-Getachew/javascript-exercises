const convertToCelsius = function (tempInFahreneit) {
  let tempInCelsius = ((tempInFahreneit - 32) * 5) / 9;
  tempInCelsius = Math.round(tempInCelsius * 10) / 10;
  return tempInCelsius;
};

const convertToFahrenheit = function (tempInCelsius) {
  let tempInFahreneit = (9 * tempInCelsius) / 5 + 32;
  tempInFahreneit = Math.round(tempInFahreneit * 10) / 10;
  return tempInFahreneit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
