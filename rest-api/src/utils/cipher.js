const aesjs = require("aes-js");

const aesEncrypt = (secret, plain) => {
  const keyBytes = aesjs.utils.utf8.toBytes(secret);
  const textBytes = aesjs.utils.utf8.toBytes(plain);

  const aesCtr = new aesjs.ModeOfOperation.ctr(keyBytes, new aesjs.Counter(5));

  const encryptedBytes = aesCtr.encrypt(textBytes);

  const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

  return encryptedHex;
};

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
