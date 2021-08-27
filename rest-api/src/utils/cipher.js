const aesjs = require("aes-js");

/**
 * Encrypts data using AES (128-Bit) in CTR mode.
 * @param {string} secret The 16 Bytes key for encrypting the data.
 * @param {string} plain The data to be encrypted.
 * @returns The encrypted data.
 * @example
 * const { encrypt } = require("./cipher");
 *
 * // The plain data to be encrypted
 * const text = "bob ross";
 *
 * // encrypt the data with a secret, that is 16-Bytes long
 * const hex = encrypt("sixteenletters!", text);
 */
const aesEncrypt = (secret, plain) => {
  const keyBytes = aesjs.utils.utf8.toBytes(secret);
  const textBytes = aesjs.utils.utf8.toBytes(plain);

  const aesCtr = new aesjs.ModeOfOperation.ctr(keyBytes, new aesjs.Counter(5));

  const encryptedBytes = aesCtr.encrypt(textBytes);

  const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

  return encryptedHex;
};

/**
 * Decrypts data using AES (128-Bit) in CTR mode.
 * @param {string} secret The 16 Bytes key for decrypting the data.
 * @param {string} hex The encrypted hexadecimal data to be decrypted.
 * @returns The decrypted data.
 * @example
 * const { encrypt, decrypt } = require("./cipher");
 *
 * // first have encrypted data
 * const encryptedData = encrypt("sixteenletters!", "Leonardo da Vinci");
 *
 * // decrypt the encrypted data
 * const decryptedData = decrypt("sixteenletters!", encryptedData);
 */
const aesDecrypt = (secret, hex) => {
  const keyBytes = aesjs.utils.utf8.toBytes(secret);
  const encryptedBytes = aesjs.utils.hex.toBytes(hex);

  const aesCtr = new aesjs.ModeOfOperation.ctr(keyBytes, new aesjs.Counter(5));

  const decryptedBytes = aesCtr.decrypt(encryptedBytes);

  const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

  return decryptedText;
};

module.exports = {
  encrypt: aesEncrypt,
  decrypt: aesDecrypt,
};
