# 🔐 CipherShield - Text Encryption & Decryption Tool

A modular, secure, and lightweight web-based cryptographic tool designed to encrypt and decrypt sensitive plain text using the AES-256 (Advanced Encryption Standard) algorithm.

---

## 🌟 Key Features

- 🛡️ **AES-256 Encryption:** Industry-standard security powered by the CryptoJS library.
- 🔑 **Custom Passphrase Protection:** Users define secret keys for encrypting and decrypting text.
- 📁 **Modular Project Architecture:** Structured code separation for maintainability (`core`, `ui`, `config`).
- 🌙 **Modern Dark Theme UI:** Sleek, responsive interface optimized for mobile and desktop screens.
- 📋 **One-Click Clipboard Copy:** Effortlessly copy encrypted output with a single tap.
- 🔒 **100% Client-Side Privacy:** Zero server dependencies; sensitive keys and messages never leave your browser.

---

## 🛠️ Tech Stack & Dependencies

- 🌐 **HTML5** - Semantic UI layout (`ui/interface.html`)
- 🎨 **CSS3** - Dark theme styling & responsive UI (`ui/main.css`)
- ⚡ **JavaScript (ES6+)** - Modular encryption/decryption modules & DOM controller
- 📦 **CryptoJS v4.1.1** - Core cryptographic algorithm engine
- 🐍 **Python** - Automated local environment & directory builder

---

## 📂 Project Directory Structure

```text
text-encryption-tool/
├── core/
│   ├── encryptor.js    # Encryption module (AES-256 logic)
│   └── decryptor.js    # Decryption module & key validation
├── ui/
│   ├── main.css        # Responsive dark UI styles
│   └── interface.html # Main user interface
├── config/
│   └── keys.json       # System configurations & encryption metadata
├── index.js            # Main application controller & event handlers
└── README.md           # Project documentation

```

---
## 🚀 How to Use

1. Download or clone the repository.
2. Navigate to the `ui` folder and double-click `interface.html` to launch the application in any modern web browser.

---

## 🔒 Security & Workflow

1. **To Encrypt Text:**
* Enter your plain text message under **"Your Message"**.
* Type a strong secret key under **"Secret Key"**.
* Click **"Encrypt Text"** to generate the encrypted cipher text.


2. **To Decrypt Text:**
* Paste the encrypted cipher text under **"Your Message"**.
* Enter the **exact secret key** used during encryption.
* Click **"Decrypt Text"** to retrieve the original message.

*Note: Only individuals who possess the exact Secret Key can decrypt and read the encrypted message.*

---
