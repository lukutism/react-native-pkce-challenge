"use strict";

import { sha256 } from 'js-sha256';
const BYTE_LENGTH = 96;
export function base64UrlEncode(str) {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/[=]/g, '');
}
export function generateChallenge(verifier) {
  const digest = sha256.digest(verifier);
  const hash = btoa(String.fromCharCode(...new Uint8Array(digest)));
  return base64UrlEncode(hash);
}
export function verifyChallenge(verifier, challenge) {
  const correctChallenge = generateChallenge(verifier);
  return correctChallenge === challenge;
}
export function getRandomBase64StringFallback(byteLength) {
  console.warn('Native getRandomValues function not found. Falling back to insecure Math.random.');
  const buffer = new Uint8Array(byteLength).map(() => Math.floor(Math.random() * 256));
  const bytes = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  return bytes;
}
export { BYTE_LENGTH };
//# sourceMappingURL=utils.js.map