import bcrypt from "bcryptjs";
export const hashPassword = async (plainTextPassword, saltRounds) => {
  return await bcrypt.hash(plainTextPassword, saltRounds);
};
export const verifyPassword = async (guessPassword, savedHash) => {
  return await bcrypt.compare(guessPassword, savedHash);
};