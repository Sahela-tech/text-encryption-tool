function encryptText() {
    const text = document.getElementById('message').value;
    const key = document.getElementById('key').value;

    if (!text || !key) {
        alert('Please enter both text and a secret key!');
        return;
    }

    const encrypted = CryptoJS.AES.encrypt(text, key).toString();
    document.getElementById('result').value = encrypted;
}

function decryptText() {
    const encryptedText = document.getElementById('message').value;
    const key = document.getElementById('key').value;

    if (!encryptedText || !key) {
        alert('Please enter both encrypted text and a secret key!');
        return;
    }

    try {
        const bytes = CryptoJS.AES.decrypt(encryptedText, key);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);

        if (!decrypted) {
            alert('Invalid Secret Key or Corrupted Text!');
            return;
        }

        document.getElementById('result').value = decrypted;
    } catch (e) {
        alert('Error during decryption! Please check input values.');
    }
}

function copyResult() {
    const resultText = document.getElementById('result');
    if (!resultText.value) {
        alert('Nothing to copy!');
        return;
    }
    resultText.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}