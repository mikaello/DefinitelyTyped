// Type definitions for blueimp-md5 v2.7.0
// Project: https://github.com/blueimp/JavaScript-MD5
// Definitions by: Ray Martone <https://github.com/rmartone>, Mikael Kohlmyr <https://github.com/mkohlmyr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Calculates MD5 value for a given string.
 * If a key is provided, calculates the HMAC-MD5 value.
 * Returns a Hex encoded string unless the raw argument is given.
 *
 * @param {string} value Input string
 * @param {string} [key] HMAC key
 * @param {boolean} [raw] Raw output switch
 * @returns {string} MD5 output
 */
declare function md5(value: string, key?: string, raw?: boolean): string;
export = md5;
