"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.squaredNumbers = void 0;

var squaredNumbers = function squaredNumbers() {
  Array.from(document.querySelectorAll(".number")).map(function (elem) {
    var currentValue = elem.getAttribute("data-number");
    elem.setAttribute("data-squared-number", currentValue * currentValue);
    return elem;
  });
};

exports.squaredNumbers = squaredNumbers;
squaredNumbers();