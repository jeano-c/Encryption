# 🔐 Node.js Cryptography Guide: RSA, AES, & Bcrypt

This guide breaks down three core cryptographic concepts: Asymmetric Encryption, Symmetric Encryption, and Password Hashing, along with how their functions work in a Node.js environment.

---

## 🎭 Asymmetric Encryption (RSA)

**Concept:** Uses a mathematically linked pair of keys—a **Public Key** (for locking) and a **Private Key** (for unlocking).

### Core Functions

1. **`generateKeys` Function**
   This is a custom function that executes `generateKeyPairSync`, a built-in method from the Node.js `node:crypto` module. Its job is to create a mathematically linked pair of keys: one for locking and one for unlocking.

2. **Encryption Function**
   This function takes two parameters: `publicKey` and `plainText`. Here, the public key is used to encrypt the plain text and return the locked data.

3. **Decrypt Function**
   This takes two parameters: a `privateKey` to decrypt the text, and the `encryptedBuffer` (the data you want to decrypt).

### Sample Workflow

1. Generate the public and private keys.
2. Load the data, then use the Encryption function to encrypt it (providing the `publicKey` and the data as parameters).
3. `console.log` the result to visually see what encrypted data looks like.
4. Decrypt the data using the Decrypt function by providing the `privateKey` and the encrypted data.

---

## 🤝 Symmetric Encryption (AES)

**Concept:** Uses a **single master key** for both locking and unlocking the data.

### Core Functions

1. **`generateKey` Setup**
   This is where we use `randomBytes`, a built-in method from the Node.js `node:crypto` module. Its job is to create one single secret master key used for both locking and unlocking the data.

2. **`encryptAES` Function**
   This function takes two parameters: `secretKey` and `plainText`. The secret key is used to encrypt the plain text and return it. _(Note: It also creates a random IV, or starting point, to make the lock stronger)._

3. **`decryptAES` Function**
   This takes two parameters: the `secretKey` and the `encryptedData` (the locked box) to decrypt it back into plain text.

### Sample Workflow

1. Generate the secret master key.
2. Load the data, then use the `encryptAES` function to encrypt it (providing the `secretKey` and the data as parameters).
3. `console.log` the result to visually see what the AES encrypted data looks like.
4. Decrypt the data using the `decryptAES` function by providing the exact same `secretKey` and the encrypted data.

---

## 🥩 Password Hashing (Bcrypt)

**Concept:** Uses a **one-way smart grinder** and a **salt** to securely store passwords. It cannot be decrypted.

### Core Functions

1. **`hashPassword` Function**
   This function takes two parameters: `plainTextPassword` and `saltRounds`.
   - The `plainTextPassword` is the original text you want to secure.
   - The `saltRounds` tells the bcrypt module how many times to loop the math. This makes the grinding process intentionally slow to protect against hackers.

   The function automatically throws in random noise (the salt) and returns the scrambled fingerprint.

2. **`verifyPassword` Function**
   This function takes two parameters: a `guessPassword` to check against the system, and the `savedHash` to verify it with. It automatically reads the hidden salt inside the saved hash, grinds up the guess the exact same way, and returns `true` or `false` if they match perfectly.

### Sample Workflow

1. Define your salt cost factor (e.g., `10`) and load your original password data.
2. Use the `hashPassword` function to hash it, providing the password and salt as parameters.
3. `console.log` the `hashedPassword` to see what the secure, salted fingerprint looks like.
4. Finally, verify it using the `verifyPassword` function (providing the password guess and the hashed password), and `console.log` the `isSame` result to see if they match!
