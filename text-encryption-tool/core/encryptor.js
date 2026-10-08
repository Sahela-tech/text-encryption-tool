function encryptText(text, key) {
    if (!text || !key) return null;
    return CryptoJS.AES.encrypt(text, key).toString();
}