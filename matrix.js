// Matrix effect implementation

// Create a container for the Matrix effect
const matrix = document.querySelector('.matrix');
const columns = Math.floor(window.innerWidth / 20); // Adjust for screen width
const rows = 30; // Minimum number of rows

// Create the initial matrix effect
let matrixColumns = [];

// Initialize columns
for (let i = 0; i < columns; i++) {
  let column = document.createElement('div');
  column.classList.add('column');
  matrix.appendChild(column);

  // Add random characters to each column
  for (let j = 0; j < rows; j++) {
    let char = document.createElement('span');
    char.classList.add('char');
    column.appendChild(char);
  }

  matrixColumns.push(column);
}

// Function to animate the matrix effect
function animateMatrix() {
  matrixColumns.forEach((column, columnIndex) => {
    let chars = column.querySelectorAll('.char');
    // Randomly assign a character to fall down
    chars.forEach((char, rowIndex) => {
      if (Math.random() < 0.05) {
        char.textContent = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96)); // Kanji/Katakana characters
      }
      if (rowIndex === chars.length - 1) {
        char.style.opacity = '0.1';
      } else {
        char.style.opacity = '1';
      }
    });
  });

  setTimeout(animateMatrix, 50); // Adjust speed here
}

// Start the animation
animateMatrix();
