// matrix.js

// Tentukan karakter yang akan digunakan dalam efek Matrix
const characters = '한국은 남북으로 나뉘어 있지만, 두 나라 모두 한글을 사용한다. 그러나 남한은 영어와 외래어의 영향을 많이 받았고, 북한은 전통적인 한국어를 지키려고 노력한다. 예를 들어, ‘인터넷’이라는 단어는 남한에서는 그대로 영어에서 차용되었지만, 북한에서는 ‘광명망’이라는 독자적인 단어를 사용한다. 남한은 또한 ‘컴퓨터’나 ‘핸드폰’과 같은 단어를 영어에서 차용한 반면, 북한은 ‘전자계산기’와 ‘휴대전화’와 같은 한국어 고유어를 사용한다. 이러한 차이는 두 나라의 정치적, 문화적 배경을 반영하며, 북한은 외래어를 배제하려는 강한 의지를 보이고 있다. 또한, 북한은 한자 사용을 거의 하지 않으며, 모든 단어를 한글로 표기하려고 한다. 반면, 남한에서는 한자가 여전히 일부 문서나 이름에서 사용된다. 이처럼, 두 나라의 언어는 각기 다른 역사적, 사회적 배경에 따라 발전해 왔으며, 이는 국가 정체성과 밀접하게 연관되어 있다.';

// Ambil elemen div dengan class 'matrix'
const matrixElement = document.querySelector('.matrix');

// Fungsi untuk membuat efek
function createMatrixEffect() {
  const numberOfColumns = Math.floor(window.innerWidth / 20);
  const numberOfRows = Math.floor(window.innerHeight / 30);

  // Set panjang dan tinggi area matrix
  matrixElement.style.width = `${numberOfColumns * 20}px`;
  matrixElement.style.height = `${numberOfRows * 30}px`;

  // Membuat array kosong untuk menyimpan kolom
  let columns = [];
  for (let i = 0; i < numberOfColumns; i++) {
    columns[i] = { y: Math.random() * numberOfRows, speed: Math.random() * 0.5 + 0.5 };
  }

  // Fungsi untuk menggambar karakter
  function drawMatrix() {
    // Clear layar setiap frame
    matrixElement.innerHTML = '';

    // Gambar setiap kolom
    columns.forEach((col, index) => {
      let char = characters[Math.floor(Math.random() * characters.length)];
      let charElement = document.createElement('div');
      charElement.textContent = char;
      charElement.style.position = 'absolute';
      charElement.style.color = 'green';
      charElement.style.fontFamily = 'monospace';
      charElement.style.fontSize = '20px';
      charElement.style.left = `${index * 20}px`;
      charElement.style.top = `${col.y * 30}px`;
      matrixElement.appendChild(charElement);

      // Update posisi vertikal
      col.y += col.speed;

      // Jika karakter mencapai bagian bawah layar, reset ke atas
      if (col.y > numberOfRows) {
        col.y = 0;
      }
    });

    // Memanggil lagi fungsi drawMatrix dengan animasi request
    requestAnimationFrame(drawMatrix);
  }

  // Mulai efek matrix
  drawMatrix();
}

// Panggil fungsi untuk memulai efek
createMatrixEffect();
