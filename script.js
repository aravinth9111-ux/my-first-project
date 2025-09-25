function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, '0')}`;
}

function generatePalette() {
  const palette = document.getElementById('palette');
  palette.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    const color = getRandomColor();
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorDiv.style.backgroundColor = color;
    colorDiv.innerText = color;

    colorDiv.onclick = () => {
      navigator.clipboard.writeText(color);
      alert(`Copied ${color} to clipboard!`);
    };

    palette.appendChild(colorDiv);
  }
}

document.getElementById('generate').addEventListener('click', generatePalette);

// Generate initial palette on load
generatePalette();
