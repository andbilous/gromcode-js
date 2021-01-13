"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGoal = exports.getPlans = exports.getDescription = exports.getTitle = void 0;

var getTitle = function getTitle() {
  return document.querySelector('.title').textContent;
};

exports.getTitle = getTitle;

var getDescription = function getDescription() {
  return document.querySelector('.about').innerText;
};

exports.getDescription = getDescription;

var getPlans = function getPlans() {
  return document.querySelector('.plans').innerHTML;
};

exports.getPlans = getPlans;

var getGoal = function getGoal() {
  return document.querySelector('.goal').outerHTML;
};

exports.getGoal = getGoal;