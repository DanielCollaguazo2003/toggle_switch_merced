// Selecciona elementos
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Función para aplicar el tema almacenado
function loadTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeSwitch.checked = true;
  }
}

// Cambiar el tema
function toggleTheme() {
  if (themeSwitch.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
}

// Escucha el cambio en el switch
themeSwitch.addEventListener('change', toggleTheme);

// Carga el tema al cargar la página
loadTheme();
