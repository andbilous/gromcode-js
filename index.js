const clearBtn = document.querySelector(".clear-btn");
const removeHandlersBtn = document.querySelector(".remove-handlers-btn");
const attachHandlersBtn = document.querySelector(".attach-handlers-btn");
const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");
const eventsList = document.querySelector(".events-list");

const logTarget = (text, color) => {
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const attachListeners = () => {
  divElem.addEventListener("click", logGreenDiv);
  pElem.addEventListener("click", logGreenP);
  spanElem.addEventListener("click", logGreenSpan);
  divElem.addEventListener("click", logGreenDiv, true);
  pElem.addEventListener("click", logGreenP, true);
  spanElem.addEventListener("click", logGreenSpan, true);
};

const removeListeners = () => {
  divElem.removeEventListener("click", logGreenDiv);
  pElem.removeEventListener("click", logGreenP);
  spanElem.removeEventListener("click", logGreenSpan);
  divElem.removeEventListener("click", logGreenDiv, true);
  pElem.removeEventListener("click", logGreenP, true);
  spanElem.removeEventListener("click", logGreenSpan, true);
};

clearBtn.addEventListener("click", () => {
  eventsList.innerHTML = "";
});
attachHandlersBtn.addEventListener("click", attachListeners);
removeHandlersBtn.addEventListener("click", removeListeners);

attachListeners();
