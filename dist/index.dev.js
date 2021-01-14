"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveCalls = void 0;

var saveCalls = function saveCalls(f) {
  var calls = [];

  function withMemory() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    calls.push(args);
    return f.apply(this, args);
  }

  return withMemory;
};

exports.saveCalls = saveCalls;

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

var testa = saveCalls(test);
testa(4, 2);
testa(9, 1);
console.log(1, testa.calls);
var user = {
  name: "John",
  sayHi: function sayHi() {
    return this.name;
  }
};
var methodWithMemory = saveCalls(user.sayHi);
console.log(2, methodWithMemory.apply({
  name: "Tom"
}));
console.log(3, methodWithMemory.calls);