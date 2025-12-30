const aqiData = {
  Delhi: { aqi: 320, risk: "Severe – Avoid outdoor activity" },
  Maharashtra: { aqi: 180, risk: "Unhealthy for sensitive groups" },
  Kerala: { aqi: 60, risk: "Moderate – Acceptable" },
  "Uttar Pradesh": { aqi: 250, risk: "Very Poor – Health alert" }
};

const select = document.getElementById("stateSelect");
const result = document.getElementById("result");

select.addEventListener("change", function () {
  const state = this.value;

  if (aqiData[state]) {
    result.innerHTML = `
      AQI: ${aqiData[state].aqi}<br>
      Health Risk: ${aqiData[state].risk}
    `;
  } else {
    result.innerHTML = "";
  }
});
Add AQI logic
