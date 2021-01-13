"use strict";

var getSection = function getSection(num) {
  return document.querySelector("span[data-number=\"".concat(num.toString(), "\"]")).parentElement.getAttribute("data-section");
};