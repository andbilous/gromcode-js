"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSection = void 0;

var getSection = function getSection(num) {
  return document.querySelector("span[data-number=\"".concat(num.toString(), "\"]")).parentElement.getAttribute("data-section");
};

exports.getSection = getSection;