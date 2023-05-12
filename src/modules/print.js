import getForcast from "./weather-data";

// Dom cache
const searchResultDiv = document.querySelector(".search-result");
const tempUnitDiv = document.querySelector(".temp-unit-select");
const speedUnitDiv = document.querySelector(".speed-unit-select");
const tempUnitCheckBoxes = document.querySelectorAll(
  ".temp-unit-select input[type=checkbox]"
);
const speedUnitCheckBoxes = document.querySelectorAll(
  ".speed-unit-select input[type=checkbox]"
);
const searchInput = document.querySelector("#city");
const cityNameTitle = document.querySelector("#city-name");
const tempPara = document.querySelector("#temperature");
const feelsLikePara = document.querySelector("#feels-like");
const windSpeedPara = document.querySelector("#wind-speed");
const gustSpeedPara = document.querySelector("#gust-speed");

let tempUnit = "°C";
let speedUnit = "mph";

function checkBoxHandler(e, nodeList) {
  if (e.target.className === "selector") {
    nodeList.forEach((box) => {
      box.checked = false;
    });
    e.target.checked = true;
  }
  tempUnitCheckBoxes.forEach((box) => {
    if (box.checked) tempUnit = box.id;
  });
  speedUnitCheckBoxes.forEach((box) => {
    if (box.checked) speedUnit = box.id;
  });
}

tempUnitDiv.addEventListener("click", (e) => {
  checkBoxHandler(e, tempUnitCheckBoxes);
});
speedUnitDiv.addEventListener("click", (e) => {
  checkBoxHandler(e, speedUnitCheckBoxes);
});

export default async function printSearchResult(e) {
  if (searchInput.value === "") return;
  let data = await getForcast(searchInput.value);
  if (!data) return;
  searchResultDiv.classList.add("active");
  cityNameTitle.textContent = data.location.name;
  if (tempUnit === "°C") {
    tempPara.textContent = `${data.current.temp_c} ${tempUnit}`;
    feelsLikePara.textContent = `Feels like: ${data.current.feelslike_c}${tempUnit}`;
  } else {
    tempPara.textContent = `${data.current.temp_f} ${tempUnit}`;
    feelsLikePara.textContent = `Feels like: ${data.current.feelslike_f}${tempUnit}`;
  }
  if (speedUnit === "mph") {
    windSpeedPara.textContent = `Wind: ${data.current.wind_mph}${speedUnit}`;
    gustSpeedPara.textContent = `Gust: ${data.current.gust_mph}${speedUnit}`;
  } else {
    windSpeedPara.textContent = `Wind: ${data.current.wind_kph}${speedUnit}`;
    gustSpeedPara.textContent = `Gust: ${data.current.gust_kph}${speedUnit}`;
  }
}
