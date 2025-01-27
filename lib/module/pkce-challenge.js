"use strict";

import { base64UrlEncode, generateChallenge } from "./utils.js";
import generateRandomBytes from './generate-random-bytes';
function generateVerifier() {
  const bytes = generateRandomBytes();
  return base64UrlEncode(bytes);
}
export default function pkceChallenge() {
  const verifier = generateVerifier();
  const challenge = generateChallenge(verifier);
  return {
    codeChallenge: challenge,
    codeVerifier: verifier
  };
}
//# sourceMappingURL=pkce-challenge.js.map