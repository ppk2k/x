// Characters in Korean directly included in the script
const koreanChars = `한국은 남북으로 나뉘어 있지만, 두 나라 모두 한글을 사용한다. 그러나 남한은 영어와 외래어의 영향을 많이 받았고, 북한은 전통적인 한국어를 지키려고 노력한다. 예를 들어, ‘인터넷’이라는 단어는 남한에서는 그대로 영어에서 차용되었지만, 북한에서는 ‘광명망’이라는 독자적인 단어를 사용한다. 남한은 또한 ‘컴퓨터’나 ‘핸드폰’과 같은 단어를 영어에서 차용한 반면, 북한은 ‘전자계산기’와 ‘휴대전화’와 같은 한국어 고유어를 사용한다. 이러한 차이는 두 나라의 정치적, 문화적 배경을 반영하며, 북한은 외래어를 배제하려는 강한 의지를 보이고 있다. 또한, 북한은 한자 사용을 거의 하지 않으며, 모든 단어를 한글로 표기하려고 한다. 반면, 남한에서는 한자가 여전히 일부 문서나 이름에서 사용된다. 이처럼, 두 나라의 언어는 각기 다른 역사적, 사회적 배경에 따라 발전해 왔으며, 이는 국가 정체성과 밀접하게 연관되어 있다.`;

// Create matrix background with Korean characters
const matrixBackground = document.createElement('div');
matrixBackground.classList.add('matrix-background');
document.body.appendChild(matrixBackground);

const numRows = 30; // Minimum number of rows for the matrix effect

// Add glow effect to the characters
const createMatrixEffect = () => {
  matrixBackground.innerHTML = ''; // Clear the background
  for (let i = 0; i < numRows; i++) {
    const char = koreanChars[Math.floor(Math.random() * koreanChars.length)];
    const span = document.createElement('span');
    span.textContent = char;
    span.classList.add('matrix-char');
    span.style.top = `${(i / numRows) * 100}%`; // Space out the characters
    span.style.animationDuration = `${Math.random() * 2 + 3}s`; // Randomize speed
    matrixBackground.appendChild(span);
  }
};

// Set interval for matrix effect to continuously update
setInterval(createMatrixEffect, 100);

// Create matrix animation effect (flickering effect) on the characters
document.styleSheets[0].insertRule(`
  .matrix-char {
    font-size: 24px;
    color: #00ff00;
    text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00;
    animation: moveUpDown 5s infinite;
  }
  
  @keyframes moveUpDown {
    0% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(-10px); opacity: 0.5; }
    100% { transform: translateY(0); opacity: 1; }
  }
`);
