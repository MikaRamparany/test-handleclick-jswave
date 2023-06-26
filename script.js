
const button = document.getElementById('myButton');
const waveContainer = document.getElementById('wave-container');
const wave = document.getElementById('wave');

button.addEventListener('click', createWave);

function createWave(event) {
  const buttonRect = button.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  const waveRadius = Math.max(window.innerWidth, window.innerHeight) / 2;

  wave.style.width = `${waveRadius}px`;
  wave.style.height = `${waveRadius}px`;
  wave.style.left = `${buttonCenterX - waveRadius / 1.12}px`; // obligé de jouer avex  le "/ nuombre" pour essayer de centrer sur le bouton 
  wave.style.top = `${buttonCenterY - waveRadius / 1.8}px`; // obligé de jouer avex  le "/ nuombre" pour essayer de centrer sur le bouton 
  // ici left and top sont réglé pour centré la vague sur un écrant 1920 sur 1080 pixels

  waveContainer.appendChild(wave);

  wave.addEventListener('animationend', () => {
    waveContainer.removeChild(wave);
  });
}
