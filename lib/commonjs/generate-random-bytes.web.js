"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateRandomBytes;
var _utils = require("./utils.js");
function generateRandomBytes() {
  const buffer = window.crypto.getRandomValues(new Uint8Array(_utils.BYTE_LENGTH));
  const bytes = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  return bytes;
}
//# sourceMappingURL=generate-random-bytes.web.js.map