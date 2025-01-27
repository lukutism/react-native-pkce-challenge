"use strict";

import { BYTE_LENGTH } from "./utils.js";
export default function generateRandomBytes() {
  const buffer = window.crypto.getRandomValues(new Uint8Array(BYTE_LENGTH));
  const bytes = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  return bytes;
}
//# sourceMappingURL=generate-random-bytes.web.js.map