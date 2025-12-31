const token = "fcf95d6065381723c3ce0f9ccf0c06cdbd58fc5e"; 

const select = document.getElementById("stateSelect");
const result = document.getElementById("result");

select.addEventListener("change", async function () {
  const city = this.value;

  if (!city) {
    result.innerHTML = "";
    return;
  }

  result.innerHTML = "Loading real-time AQI data...";

  try {
    const response = await fetch(
      `https://api.waqi.info/feed/${city}/?token=${token}`
    );
    const data = await response.json();

    if (data.status === "ok") {
      const aqi = data.data.aqi;

      let risk = "";
      if (aqi <= 50) risk = "Good – Low health risk";
      else if (aqi <= 100) risk = "Moderate – Acceptable";
      else if (aqi <= 200) risk = "Unhealthy – Sensitive groups affected";
      else risk = "Very Poor – Health alert";

      result.innerHTML = `
        AQI: ${aqi}<br>
        Health Risk: ${risk}
      `;
    } else {
      result.innerHTML = "AQI data not available.";
    }
  } catch (error) {
    result.innerHTML = "Error fetching data.";
  }
});
