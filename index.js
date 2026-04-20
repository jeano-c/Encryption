import { generateKeys, encrypt, decrypt } from "./rsa.js";
import { encryptAES, decryptAES, generateSecretKey } from "./aes.js";
import bcrypt from "bcrypt";
import { hashPassword, verifyPassword } from "./passhash.js";
// const { publicKey, privateKey } = generateKeys();
// console.log("---Keys---");
// console.log(publicKey);
// console.log(privateKey);

// const message = "Top secret data!";
// const encrypted = encrypt(publicKey, message);

// console.log("--- Encrypted Payload ---");
// console.log(encrypted.toString("base64"));

// const decrypted = decrypt(privateKey, encrypted);

// console.log("\n--- Decrypted Message ---");
// console.log(decrypted);

// const myMasterKey = generateSecretKey();

// const data = "lorem ispu";
// const lockedBox = encryptAES(myMasterKey, data);

// console.log("Locked:", lockedBox);

// const unlockedData = decryptAES(myMasterKey, lockedBox);

// console.log("Unlocked:", unlockedData);

const salt = 10;

const password = "admin123456789";

const hashedPassword = await hashPassword(password, salt);

console.log(hashedPassword);

const isSame = await verifyPassword(password, hashedPassword);

console.log(isSame);
