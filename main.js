function createRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `(${r}, ${g}, ${b})`;
}

function insertRgb() {
  const p = document.getElementById('rgb-color');
  p.innerText = createRgb();
}

window.onload = () => {
  insertRgb();
};
