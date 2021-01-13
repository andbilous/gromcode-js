"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var tasks = [{
  text: 'Buy milk',
  done: false
}, {
  text: 'Pick up Tom from airport',
  done: false
}, {
  text: 'Visit party',
  done: false
}, {
  text: 'Visit doctor',
  done: true
}, {
  text: 'Buy meat',
  done: true
}];

var renderListItems = function renderListItems(listItems) {
  var listElem = document.querySelector(".list");
  var listItemsElems = listItems.sort(function (a, b) {
    return a.done - b.done;
  }).map(function (_ref) {
    var text = _ref.text,
        done = _ref.done;
    var listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');

    if (done) {
      listItemElem.classList.add('list__item-done');
    }

    var checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');
    listItemElem.append(checkboxElem, text);
    return listItemElem;
  });
  listElem.append.apply(listElem, _toConsumableArray(listItemsElems));
};

renderListItems(tasks);