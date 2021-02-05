"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.account = account;

var _mockjs = _interopRequireDefault(require("mockjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function account(options) {
  console.log(options);
  var params = JSON.parse(options.body);
  console.log(params);
  if (params.account === 'admin' && params.password === '123456') return _mockjs["default"].mock({
    status: '200',
    msg: '请求成功'
  });
}