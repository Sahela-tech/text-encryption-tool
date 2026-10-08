function decryptText(encryptedText, key) {
    if (!encryptedText || !key) return null;
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedText, key);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        return decrypted || null;
    } catch (e) {
        return null;
    }
}