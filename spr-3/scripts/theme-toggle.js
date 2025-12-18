const toggleButton = document.querySelector('.theme-toggle');
const themeLabel = document.getElementById('theme-label');
const themeIcon = document.querySelector('.theme-icon');

function getPreferredTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  if (theme === 'dark') {
    themeLabel.textContent = 'Ciemny';
    themeIcon.textContent = '🌙';
    toggleButton.setAttribute('aria-pressed', 'true');
  } else {
    themeLabel.textContent = 'Jasny';
    themeIcon.textContent = '☀️';
    toggleButton.setAttribute('aria-pressed', 'false');
  }
}

toggleButton.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  setTheme(next);
});

setTheme(getPreferredTheme());

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});
