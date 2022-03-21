/**
 * Affiche des confettis sur la page
 */

export function setDarkMode(value) {
  if (value) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

export function getCV() {
  const a = document.createElement('a');
  a.href = 'resources/CV - Antoine DAUTRY.pdf';
  a.setAttribute('download', 'CV - Antoine DAUTRY.pdf');
  a.click();
}
