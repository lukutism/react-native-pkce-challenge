"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateRandomBytes;
var _reactNative = require("react-native");
var _utils = require("./utils.js");
var _NativePkceChallenge = _interopRequireDefault(require("./NativePkceChallenge.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function generateRandomBytes() {
  const globalObject = global;
  if (globalObject?.ExpoModules?.ExpoRandom) {
    return globalObject.ExpoModules.ExpoRandom.getRandomBase64String(_utils.BYTE_LENGTH);
  }
  if (globalObject?.ExpoModules?.ExpoCrypto) {
    return globalObject.ExpoModules.ExpoCrypto.getRandomBase64String(_utils.BYTE_LENGTH);
  }
  if (_reactNative.NativeModules.ExpoRandom) {
    return _reactNative.NativeModules.ExpoRandom.getRandomBase64String(_utils.BYTE_LENGTH);
  }
  if (_reactNative.NativeModules.ExpoCrypto) {
    return _reactNative.NativeModules.ExpoCrypto.getRandomBase64String(_utils.BYTE_LENGTH);
  }
  if (_NativePkceChallenge.default?.getRandomBase64String) {
    return _NativePkceChallenge.default.getRandomBase64String(_utils.BYTE_LENGTH);
  }
  return (0, _utils.getRandomBase64StringFallback)(_utils.BYTE_LENGTH);
}
//# sourceMappingURL=generate-random-bytes.native.js.map