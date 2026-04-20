Asymmetric Encryption
RSA its Uses public and private key

1. generateKeys Function
   This is a custom function that executes generateKeyPairSync, a built-in method from the Node.js node:crypto module. Its job is to create a mathematically linked pair of keys one for locking and one for unlocking.
2. Encryption Function
   This function take two parameter publicket and plaintext in here the publickey is uses to encrypt the plain text and return it
3. decrypt function
   takes two parameter a private key to decrypt the encrytedtext and encryptedBuffer the one to decrypt

sample uses first is generate the public and private key
next is load the data then use the Encryption function we made to encrypt it provide the parameter key and the data
console log them to be visible what a encrypted looks like and decrypted it by using the decrypt function we made by providing the private key and the encrypted data

Symmetric Encryption
AES its Uses a single master key

    1.generateKey Setup
This is where we uses randomBytes, a built-in method from the Node.js node: crypto module. Its job is to create one single secret master key used for both locking and unlocking the data.

2.encryptAES Function
This function take two parameter secretKey and plaintext in here the secretKey is uses to encrypt the plain text and return it (it also creates a random IV or starting point to make the lock stronger)
3.decryptAES function
takes two parameter a secret key to decrypt the encrytedtext and encryptedData the one to decrypt

sample uses first is generate the secret master key
next is load the data then use the encryptAES function we made to encrypt it provide the parameter key and the data
console log them to be visible what a encryptAES looks like and decrypted it by using the decryptAES function we made by providing the secret key and the encrypted data

Password Hashing
Bcrypt its Uses a one-way grinder and a salt

1. hashPassword Function
   This function takes two parameters: plainTextPassword and saltRounds. The plainTextPassword is the original text you want to secure, and the saltRounds tells the bcrypt module how many times to loop the math. This makes the grinding process intentionally slow to protect against hackers. The function automatically throws in random noise (the salt) and returns the scrambled fingerprint.

2. verifyPassword Function
   This function takes two parameters: a guessPassword to check against the system, and the savedHash to verify it with. It automatically reads the hidden salt inside the saved hash, grinds up the guess the exact same way, and returns true or false if they match perfectly.

Sample Uses
First is to define your salt cost factor (like 10) and load your original password data.
Next is to use the hashPassword function we made to hash it, providing the password and salt as parameters.
Console log the hashedPassword to make it visible what the secure, salted fingerprint looks like.
Finally, verify it by using the verifyPassword function we made, providing the password guess and the hashed password, and console log the isSame result to see if they match!
