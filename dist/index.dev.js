"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemsArray = exports.getItemsList = void 0;

var getItemsList = function getItemsList() {
  var elems = document.querySelectorAll('.technology');
  console.dir(elems);
  return elems;
};

exports.getItemsList = getItemsList;

var getItemsArray = function getItemsArray() {
  var elems = document.querySelectorAll('.tool');
  var arr = Array.from(elems);
  console.dir(arr);
  return arr;
};

exports.getItemsArray = getItemsArray;