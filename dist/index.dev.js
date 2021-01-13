"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createButton = void 0;

var createButton = function createButton(text) {
  var btn = document.createElement('button');
  btn.textContent = text;
  document.querySelector('body').appendChild(btn);
};

exports.createButton = createButton;