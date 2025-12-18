const toggleButton = document.querySelector('.theme-toggle');
const themeLabel = document.getElementById('theme-label');
const themeIcon = document.querySelector('.theme-icon');

function updateThemeUI(theme) {
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

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeUI(theme);
}

toggleButton.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  setTheme(next);
});

const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
updateThemeUI(currentTheme);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});
