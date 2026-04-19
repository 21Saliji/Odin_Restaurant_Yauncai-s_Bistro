import './style.css';
import { loadHome } from './initial-page-load.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
import { loadAbout } from './about.js';


const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');
const aboutBtn = document.getElementById('about-btn');


const buttons = [homeBtn, menuBtn, contactBtn, aboutBtn];
const setActive = (btn) => buttons.forEach(b => b.classList.toggle('active', b === btn));

loadHome();
setActive(homeBtn);

homeBtn.addEventListener('click', () => {
    loadHome(); setActive(homeBtn);
});

menuBtn.addEventListener('click', () => {
    loadMenu(); setActive(menuBtn);
});

contactBtn.addEventListener('click', () => {
    loadContact(); setActive(contactBtn);
});

aboutBtn.addEventListener('click', () => {
    loadAbout(); setActive(aboutBtn);
});