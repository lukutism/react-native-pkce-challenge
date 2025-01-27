declare const BYTE_LENGTH = 96;
export interface IChallenge {
    codeChallenge: string;
    codeVerifier: string;
}
export declare function base64UrlEncode(str: string): string;
export declare function generateChallenge(verifier: string): string;
export declare function verifyChallenge(verifier: string, challenge: string): boolean;
export declare function getRandomBase64StringFallback(byteLength: number): string;
export { BYTE_LENGTH };
//# sourceMappingURL=utils.d.ts.map