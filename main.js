// gera codigo rgb randomico.
function createRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// insere paletas de cores na página
function insertColorGuess() {
  const div = document.getElementById('paleta');
  const p = document.getElementById('rgb-color');
  const answer = document.getElementById('answer');
  p.innerText = createRgb();
  const random = Math.floor(Math.random() * 6);
  for (let i = 0; i < 6; i += 1) {
    const divCircle = document.createElement('div');
    divCircle.className = 'ball';
    if (random === i) {
      divCircle.style.backgroundColor = p.innerText;
    } else {
      divCircle.style.backgroundColor = createRgb();
    }
    div.appendChild(divCircle);
  }
  answer.innerText = 'Escolha uma cor';
}

function responseGame() {
  const ball = document.getElementsByClassName('ball');
  const p = document.getElementById('rgb-color');
  const answer = document.getElementById('answer');
  for (let i = 0; i < ball.length; i += 1) {
    ball[i].addEventListener('click', (event) => {
      const backGround = event.target.style.backgroundColor;
      if (backGround === p.innerText) {
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}

function resetGame() {
  const reset = document.getElementById('reset-game');
  const div = document.getElementById('paleta');
  const ball = document.getElementsByClassName('ball');

  reset.addEventListener('click', () => {
    for (let index = ball.length - 1; index >= 0; index -= 1) {
      div.removeChild(ball[index]);
    }
    insertColorGuess();
  });
}

window.onload = () => {
  insertColorGuess();
  responseGame();
  resetGame();
};
