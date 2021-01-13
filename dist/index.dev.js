"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTitle = void 0;

var setTitle = function setTitle(text) {
  document.querySelector('.title').textContent = text;
};

exports.setTitle = setTitle;