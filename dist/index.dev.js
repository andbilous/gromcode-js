"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInputElement = exports.getTitleElement = void 0;

var getTitleElement = function getTitleElement() {
  var titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};

exports.getTitleElement = getTitleElement;

var getInputElement = function getInputElement() {
  var inputElem = document.querySelector('input[type="text"]');
  console.dir(inputElem);
  return inputElem;
};

exports.getInputElement = getInputElement;