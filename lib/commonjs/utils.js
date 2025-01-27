"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BYTE_LENGTH = void 0;
exports.base64UrlEncode = base64UrlEncode;
exports.generateChallenge = generateChallenge;
exports.getRandomBase64StringFallback = getRandomBase64StringFallback;
exports.verifyChallenge = verifyChallenge;
var _jsSha = require("js-sha256");
const BYTE_LENGTH = exports.BYTE_LENGTH = 96;
function base64UrlEncode(str) {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/[=]/g, '');
}
function generateChallenge(verifier) {
  const digest = _jsSha.sha256.digest(verifier);
  const hash = btoa(String.fromCharCode(...new Uint8Array(digest)));
  return base64UrlEncode(hash);
}
function verifyChallenge(verifier, challenge) {
  const correctChallenge = generateChallenge(verifier);
  return correctChallenge === challenge;
}
function getRandomBase64StringFallback(byteLength) {
  console.warn('Native getRandomValues function not found. Falling back to insecure Math.random.');
  const buffer = new Uint8Array(byteLength).map(() => Math.floor(Math.random() * 256));
  const bytes = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  return bytes;
}
//# sourceMappingURL=utils.js.map