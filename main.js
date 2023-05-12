/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/print.js":
/*!******************************!*\
  !*** ./src/modules/print.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printSearchResult)
/* harmony export */ });
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ "./src/modules/weather-data.js");


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

async function printSearchResult(e) {
  if (searchInput.value === "") return;
  let data = await (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(searchInput.value);
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


/***/ }),

/***/ "./src/modules/weather-data.js":
/*!*************************************!*\
  !*** ./src/modules/weather-data.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getForcast)
/* harmony export */ });
async function getForcast(q) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=55913b845fda4cf890a152532230905&q=${q}`
    );
    if (!response.ok) throw new Error(`City ${q} not found`);
    const data = await response.json();
    return data;
  } catch (err) {
    alert(err);
    return null;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/print */ "./src/modules/print.js");


const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", _modules_print__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVjO0FBQ2Y7QUFDQSxtQkFBbUIseURBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUJBQXFCLEVBQUUsU0FBUztBQUM5RCwrQ0FBK0MseUJBQXlCLEVBQUUsU0FBUztBQUNuRixJQUFJO0FBQ0osOEJBQThCLHFCQUFxQixFQUFFLFNBQVM7QUFDOUQsK0NBQStDLHlCQUF5QixFQUFFLFNBQVM7QUFDbkY7QUFDQTtBQUNBLHlDQUF5QyxzQkFBc0IsRUFBRSxVQUFVO0FBQzNFLHlDQUF5QyxzQkFBc0IsRUFBRSxVQUFVO0FBQzNFLElBQUk7QUFDSix5Q0FBeUMsc0JBQXNCLEVBQUUsVUFBVTtBQUMzRSx5Q0FBeUMsc0JBQXNCLEVBQUUsVUFBVTtBQUMzRTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRWU7QUFDZjtBQUNBO0FBQ0EsMEZBQTBGLEVBQUU7QUFDNUY7QUFDQSw4Q0FBOEMsR0FBRztBQUNqRDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nRDs7QUFFaEQ7O0FBRUEsdUNBQXVDLHNEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9wcmludC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlci1kYXRhLmpzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRGb3JjYXN0IGZyb20gXCIuL3dlYXRoZXItZGF0YVwiO1xuXG4vLyBEb20gY2FjaGVcbmNvbnN0IHNlYXJjaFJlc3VsdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXJlc3VsdFwiKTtcbmNvbnN0IHRlbXBVbml0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLXVuaXQtc2VsZWN0XCIpO1xuY29uc3Qgc3BlZWRVbml0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGVlZC11bml0LXNlbGVjdFwiKTtcbmNvbnN0IHRlbXBVbml0Q2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gIFwiLnRlbXAtdW5pdC1zZWxlY3QgaW5wdXRbdHlwZT1jaGVja2JveF1cIlxuKTtcbmNvbnN0IHNwZWVkVW5pdENoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICBcIi5zcGVlZC11bml0LXNlbGVjdCBpbnB1dFt0eXBlPWNoZWNrYm94XVwiXG4pO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHlcIik7XG5jb25zdCBjaXR5TmFtZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5LW5hbWVcIik7XG5jb25zdCB0ZW1wUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcGVyYXR1cmVcIik7XG5jb25zdCBmZWVsc0xpa2VQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmZWVscy1saWtlXCIpO1xuY29uc3Qgd2luZFNwZWVkUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luZC1zcGVlZFwiKTtcbmNvbnN0IGd1c3RTcGVlZFBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2d1c3Qtc3BlZWRcIik7XG5cbmxldCB0ZW1wVW5pdCA9IFwiwrBDXCI7XG5sZXQgc3BlZWRVbml0ID0gXCJtcGhcIjtcblxuZnVuY3Rpb24gY2hlY2tCb3hIYW5kbGVyKGUsIG5vZGVMaXN0KSB7XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwic2VsZWN0b3JcIikge1xuICAgIG5vZGVMaXN0LmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBlLnRhcmdldC5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuICB0ZW1wVW5pdENoZWNrQm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgaWYgKGJveC5jaGVja2VkKSB0ZW1wVW5pdCA9IGJveC5pZDtcbiAgfSk7XG4gIHNwZWVkVW5pdENoZWNrQm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgaWYgKGJveC5jaGVja2VkKSBzcGVlZFVuaXQgPSBib3guaWQ7XG4gIH0pO1xufVxuXG50ZW1wVW5pdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY2hlY2tCb3hIYW5kbGVyKGUsIHRlbXBVbml0Q2hlY2tCb3hlcyk7XG59KTtcbnNwZWVkVW5pdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY2hlY2tCb3hIYW5kbGVyKGUsIHNwZWVkVW5pdENoZWNrQm94ZXMpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHByaW50U2VhcmNoUmVzdWx0KGUpIHtcbiAgaWYgKHNlYXJjaElucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm47XG4gIGxldCBkYXRhID0gYXdhaXQgZ2V0Rm9yY2FzdChzZWFyY2hJbnB1dC52YWx1ZSk7XG4gIGlmICghZGF0YSkgcmV0dXJuO1xuICBzZWFyY2hSZXN1bHREaXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgY2l0eU5hbWVUaXRsZS50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZTtcbiAgaWYgKHRlbXBVbml0ID09PSBcIsKwQ1wiKSB7XG4gICAgdGVtcFBhcmEudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQudGVtcF9jfSAke3RlbXBVbml0fWA7XG4gICAgZmVlbHNMaWtlUGFyYS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2RhdGEuY3VycmVudC5mZWVsc2xpa2VfY30ke3RlbXBVbml0fWA7XG4gIH0gZWxzZSB7XG4gICAgdGVtcFBhcmEudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQudGVtcF9mfSAke3RlbXBVbml0fWA7XG4gICAgZmVlbHNMaWtlUGFyYS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2RhdGEuY3VycmVudC5mZWVsc2xpa2VfZn0ke3RlbXBVbml0fWA7XG4gIH1cbiAgaWYgKHNwZWVkVW5pdCA9PT0gXCJtcGhcIikge1xuICAgIHdpbmRTcGVlZFBhcmEudGV4dENvbnRlbnQgPSBgV2luZDogJHtkYXRhLmN1cnJlbnQud2luZF9tcGh9JHtzcGVlZFVuaXR9YDtcbiAgICBndXN0U3BlZWRQYXJhLnRleHRDb250ZW50ID0gYEd1c3Q6ICR7ZGF0YS5jdXJyZW50Lmd1c3RfbXBofSR7c3BlZWRVbml0fWA7XG4gIH0gZWxzZSB7XG4gICAgd2luZFNwZWVkUGFyYS50ZXh0Q29udGVudCA9IGBXaW5kOiAke2RhdGEuY3VycmVudC53aW5kX2twaH0ke3NwZWVkVW5pdH1gO1xuICAgIGd1c3RTcGVlZFBhcmEudGV4dENvbnRlbnQgPSBgR3VzdDogJHtkYXRhLmN1cnJlbnQuZ3VzdF9rcGh9JHtzcGVlZFVuaXR9YDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yY2FzdChxKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTU1OTEzYjg0NWZkYTRjZjg5MGExNTI1MzIyMzA5MDUmcT0ke3F9YFxuICAgICk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBDaXR5ICR7cX0gbm90IGZvdW5kYCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgYWxlcnQoZXJyKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJpbnRTZWFyY2hSZXN1bHQgZnJvbSBcIi4vbW9kdWxlcy9wcmludFwiO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1idXR0b25cIik7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJpbnRTZWFyY2hSZXN1bHQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9