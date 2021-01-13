"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = exports.User = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable consistent-return */

/* eslint-disable no-restricted-syntax */

/* eslint-disable max-classes-per-file */
var User =
/*#__PURE__*/
function () {
  function User(id, name, sessionId) {
    _classCallCheck(this, User);

    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  _createClass(User, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "sessionId",
    get: function get() {
      return this._sessionId;
    }
  }]);

  return User;
}();

exports.User = User;

var UserRepository =
/*#__PURE__*/
function () {
  function UserRepository(users) {
    _classCallCheck(this, UserRepository);

    this._users = users;
    Object.freeze(users);
  }

  _createClass(UserRepository, [{
    key: "getUserNames",
    value: function getUserNames() {
      return this._users.map(function (user) {
        return user._name;
      });
    }
  }, {
    key: "getUserIds",
    value: function getUserIds() {
      return this._users.map(function (user) {
        return user._id;
      });
    }
  }, {
    key: "getUserNameById",
    value: function getUserNameById(id) {
      return this._users.filter(function (user) {
        return user.id === id;
      })[0].name;
    }
  }, {
    key: "users",
    get: function get() {
      return this._users;
    }
  }]);

  return UserRepository;
}();

exports.UserRepository = UserRepository;