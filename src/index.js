import data from './menu.json';
import compiledTemplate from './template.hbs';
import './styles.css';
//-----------------------------------------------
const markup = data.map(compiledTemplate).join('');
document.querySelector('.js-menu').innerHTML = markup;
//----
const THEME_KEY = 'theme';
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switchTheme = document.querySelector('#theme-switch-toggle');

if (localStorage.getItem(THEME_KEY)) {
  document.body.classList.add(localStorage.getItem(THEME_KEY));
  if (localStorage.getItem(THEME_KEY) === theme.DARK) {
    switchTheme.checked = true;
  }
}

switchTheme.addEventListener('change', e => {
  if (e.currentTarget.checked) {
    localStorage.setItem(THEME_KEY, theme.DARK);
    document.body.classList.add(theme.DARK);
    document.body.classList.remove(theme.LIGHT);
  } else {
    localStorage.setItem(THEME_KEY, theme.LIGHT);
    document.body.classList.remove(theme.DARK);
    document.body.classList.add(theme.LIGHT);
  }
});
//-----------------------
