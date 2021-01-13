"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindF = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var bindF = function bindF(func, context, _ref, _ref2) {
  var _ref3 = _slicedToArray(_ref, 1),
      arg1 = _ref3[0];

  var _ref4 = _slicedToArray(_ref2, 1),
      arg2 = _ref4[0];

  return function () {
    return func.call(context, arg1, arg2);
  };
};

exports.bindF = bindF;
var _module = {
  x: 42,
  getX: function getX() {
    return this.x;
  }
};
var unboundGetX = _module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bindF(_module);
console.log(boundGetX()); // expected output: 42