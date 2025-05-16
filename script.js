function encryptAES() {
  const message = document.getElementById('inputText').value;
  const key = document.getElementById('secretKey').value;

  if (!message || !key) {
    alert("Vui lòng nhập cả tin nhắn và khóa bí mật!");
    return;
  }

  const ciphertext = CryptoJS.AES.encrypt(message, key).toString();
  document.getElementById('outputText').value = ciphertext;
}

function decryptAES() {
  const encrypted = document.getElementById('outputText').value;
  const key = document.getElementById('secretKey').value;

  if (!encrypted || !key) {
    alert("Vui lòng nhập cả tin mã hóa và khóa bí mật!");
    return;
  }

  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, key);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);

    if (!plaintext) {
      throw new Error("Sai khóa hoặc tin không hợp lệ");
    }

    document.getElementById('outputText').value = plaintext;
  } catch (e) {
    alert("Giải mã thất bại: " + e.message);
  }
}

function copyToClipboard() {
  const output = document.getElementById('outputText');
  output.select();
  document.execCommand('copy');
  alert('Đã sao chép kết quả!');
}

function saveToFile() {
  const text = document.getElementById('outputText').value;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.download = "ketqua_mahoa.txt";
  link.href = URL.createObjectURL(blob);
  link.click();
}
