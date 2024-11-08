// Matrix effect implementation

// Create a container for the Matrix effect
const matrix = document.querySelector('.matrix');
const columns = Math.floor(window.innerWidth / 20); // Adjust for screen width
const rows = Math.floor(window.innerHeight / 20); // Adjust for screen height

// Create the initial matrix effect
let matrixColumns = [];

// Initialize columns and set them up with spans of characters
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
      // Use Katakana characters (or you can modify this to any character set)
      if (Math.random() < 0.05) {
        char.textContent = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96)); // Katakana characters
      }
      
      // Create a "falling" effect by adjusting the opacity
      if (rowIndex === chars.length - 1) {
        char.style.opacity = '0.1';
      } else {
        char.style.opacity = '1';
      }
    });
  });

  // Call the function every 50 milliseconds (adjust the speed here)
  setTimeout(animateMatrix, 50);
}

// Start the animation
animateMatrix();

// Ensure the matrix adapts to screen resizing
window.addEventListener('resize', () => {
  location.reload(); // Reload the page to adjust the size of the matrix on resize
});
