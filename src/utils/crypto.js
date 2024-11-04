import CryptoJS from 'crypto-js';

const secretKey = 'your-secret-key'; // Use a securely stored secret key in production

// Encrypts an object and converts it to a query parameter-safe string
export const encryptObjectToQueryParam = (obj) => {
  try {
    const jsonString = JSON.stringify(obj);
    const encrypted = CryptoJS.AES.encrypt(jsonString, secretKey).toString();
    return encodeURIComponent(encrypted);
  } catch (error) {
    console.error('Encryption error:', error);
    return null;
  }
};

// Decrypts the query parameter-safe encrypted string back into an object
export const decryptQueryParamToObject = (encryptedString) => {
  try {
    const decrypted = CryptoJS.AES.decrypt(decodeURIComponent(encryptedString), secretKey);
    const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Decryption error:', error);
    return null;
  }
};
