

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getCustomersList = function getCustomersList(obj) {
  console.log(Object.values(obj).map((item) => _objectSpread({}, item)));
};

const customers = {
  'customer-id-1': {
    name: 'A',
    age: 54
  },
  'customer-id-2': {
    name: 'B',
    age: 17
  }
};
console.log(getCustomersList(customers));