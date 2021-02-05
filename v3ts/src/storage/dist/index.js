"use strict";
exports.__esModule = true;
exports.getToken = exports.setUuid = exports.setToken = void 0;
var js_cookie_1 = require("js-cookie");
var token = "JSESSIONID";
function setToken(v) {
    return js_cookie_1["default"].set(token, v);
}
exports.setToken = setToken;
function setUuid(v) {
    return js_cookie_1["default"].set('uuid', v);
}
exports.setUuid = setUuid;
function getToken() {
    return js_cookie_1["default"].get(token);
}
exports.getToken = getToken;
