import './index.scss';

import createMenu from '../../components/menu/menu.js';
var menu = createMenu(['Главная','Обо мне', 'Портфолио'], 'menu');
document.body.appendChild(menu);


console.log('index page');
