"use strict";

import { BYTE_LENGTH } from "./utils.js";
export default function generateRandomBytes() {
  if (typeof window === 'undefined') {
    const buffer = require('crypto').randomBytes(BYTE_LENGTH);
    const bytes = buffer.toString('base64');
    return bytes;
  }
  const buffer = window.crypto.getRandomValues(new Uint8Array(BYTE_LENGTH));
  const bytes = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  return bytes;
}
//# sourceMappingURL=generate-random-bytes.js.map