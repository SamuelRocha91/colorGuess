// gera codigo rgb randomico.
function createRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// insere rgb num paragrafo

function insertRgb() {
  const p = document.getElementById('rgb-color');
  p.innerText = createRgb();
}

// insere paletas de cores na página
function insertColorGuess() {
  const div = document.getElementById('paleta');
  for (let i = 0; i < 6; i += 1) {
    const divCircle = document.createElement('div');
    divCircle.className = 'ball';
    divCircle.style.backgroundColor= createRgb();
    div.appendChild(divCircle);
  }
}

window.onload = () => {
  insertRgb();
  insertColorGuess();
};
