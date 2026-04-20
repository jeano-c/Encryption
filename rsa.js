import {
  generateKeyPairSync,
  publicEncrypt,
  privateDecrypt,
  constants,
} from "node:crypto";


export const generateKeys = () => {
  return generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
  });
};

export const encrypt = (publicKey, plainText) => {
  const buffer = Buffer.from(plainText, "utf8");
  return publicEncrypt(
    {
      key: publicKey,
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    buffer,
  );
};


export const decrypt = (privateKey, encryptedBuffer) => {
  const buffer = privateDecrypt(
    {
      key: privateKey,
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    encryptedBuffer,
  );
  return buffer.toString("utf8");
};
