document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message');
    const keyInput = document.getElementById('key');
    const resultInput = document.getElementById('result');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');

    encryptBtn.addEventListener('click', () => {
        const text = messageInput.value;
        const key = keyInput.value;

        if (!text || !key) {
            alert('Please enter both text and a secret key!');
            return;
        }

        const encrypted = encryptText(text, key);
        resultInput.value = encrypted;
    });

    decryptBtn.addEventListener('click', () => {
        const text = messageInput.value;
        const key = keyInput.value;

        if (!text || !key) {
            alert('Please enter both encrypted text and a secret key!');
            return;
        }

        const decrypted = decryptText(text, key);
        if (!decrypted) {
            alert('Invalid Secret Key or Corrupted Text!');
            return;
        }

        resultInput.value = decrypted;
    });

    copyBtn.addEventListener('click', () => {
        if (!resultInput.value) {
            alert('Nothing to copy!');
            return;
        }
        resultInput.select();
        document.execCommand('copy');
        alert('Copied to clipboard!');
    });
});