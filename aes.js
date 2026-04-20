import { randomBytes, createCipheriv, createDecipheriv } from "node:crypto";

// 1. Generate Key Function (Now Exported)
// Call this when you need a brand new 32-byte master key
export const generateSecretKey = () => {
  return randomBytes(32);
};

// 2. Encryption Function (Now takes 'key' and 'plainText')
export const encryptAES = (key, plainText) => {
  const iv = randomBytes(16);
  const cipher = createCipheriv("aes-256-gcm", key, iv);

  let encrypted = cipher.update(plainText, "utf8", "hex");
  encrypted += cipher.final("hex");

  const authTag = cipher.getAuthTag();

  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted,
    authTag: authTag.toString("hex"),
  };
};

// 3. Decryption Function (Now takes 'key' and 'lockedBox')
export const decryptAES = (key, lockedBox) => {
  const decipher = createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from(lockedBox.iv, "hex"),
  );

  decipher.setAuthTag(Buffer.from(lockedBox.authTag, "hex"));

  let decrypted = decipher.update(lockedBox.encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};
