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

const logGrayDiv = logTarget.bind(null, "DIV", "grey");
const logGrayP = logTarget.bind(null, "P", "grey");
const logGraySpan = logTarget.bind(null, "SPAN", "grey");

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const attachListeners = () => {
  divElem.addEventListener("click", logGrayDiv, true);
  pElem.addEventListener("click", logGrayP, true);
  spanElem.addEventListener("click", logGraySpan, true);
  divElem.addEventListener("click", logGreenDiv);
  pElem.addEventListener("click", logGreenP);
  spanElem.addEventListener("click", logGreenSpan);
};

const removeListeners = () => {
  divElem.removeEventListener("click", logGreenDiv);
  pElem.removeEventListener("click", logGreenP);
  spanElem.removeEventListener("click", logGreenSpan);
  divElem.removeEventListener("click", logGrayDiv, true);
  pElem.removeEventListener("click", logGrayP, true);
  spanElem.removeEventListener("click", logGraySpan, true);
};

clearBtn.addEventListener("click", () => {
  eventsList.innerHTML = "";
});
attachHandlersBtn.addEventListener("click", attachListeners);
removeHandlersBtn.addEventListener("click", removeListeners);

attachListeners();
