const matrix = document.querySelector('.matrix');
const columns = Math.floor(window.innerWidth / 20); // Calculate the number of columns based on the screen width
const rows = Math.floor(window.innerHeight / 20); // Calculate the number of rows based on the screen height

// Create columns in the matrix
let matrixColumns = [];
for (let i = 0; i < columns; i++) {
  let column = document.createElement('div');
  column.classList.add('column');
  matrix.appendChild(column);

  // Create random characters inside each column
  for (let j = 0; j < rows; j++) {
    let char = document.createElement('span');
    char.classList.add('char');
    char.textContent = getRandomCharacter(); // Initialize with random character
    column.appendChild(char);
  }

  matrixColumns.push(column);
}

// Function to generate a random character (you can customize this)
function getRandomCharacter() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789가나다라마바사'; // Add Korean and other symbols
  return characters[Math.floor(Math.random() * characters.length)];
}

// Change the character randomly
function changeCharacter() {
  matrixColumns.forEach((column) => {
    let chars = column.querySelectorAll('.char');
    chars.forEach((char) => {
      if (Math.random() < 0.1) {
        char.textContent = getRandomCharacter(); // Change the character occasionally
      }
    });
  });

  setTimeout(changeCharacter, 200); // Change characters every 200ms
}

// Start the character change process
changeCharacter();

// Reload the page on resize to adjust the matrix
window.addEventListener('resize', () => {
  location.reload();
});
