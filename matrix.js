const matrixElement = document.getElementById('matrix');

// Membuat array karakter untuk efek
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()!~';
const columns = Math.floor(window.innerWidth / 20);
const rows = Math.floor(window.innerHeight / 30);
let matrixArray = Array.from({ length: columns }, () => Array.from({ length: rows }, () => ' '));

function getRandomChar() {
    return characters[Math.floor(Math.random() * characters.length)];
}

function generateMatrix() {
    let output = '';
    
    // Memodifikasi setiap kolom untuk menampilkan karakter secara acak
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            matrixArray[x][y] = getRandomChar();
            output += matrixArray[x][y];
        }
        output += '\n';
    }
    matrixElement.innerText = output;
}

// Mengupdate tampilan setiap 100ms
setInterval(generateMatrix, 100);
