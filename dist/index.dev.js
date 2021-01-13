"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setButton = void 0;

var setButton = function setButton(text) {
  document.querySelector('body').innerHTML = "<button>".concat(text, "</button>");
};

exports.setButton = setButton;