const mobileMenu = document.querySelector('#mobile-menu');

function showMobileLinks() {
    mobileMenu.classList.toggle('open');
}

const semesterMenu = document.querySelector('.desktop_links .semester-hover');
const semesterList = document.querySelector('.desktop_links .semester-hover .semester-dropdown');

function showSemesterLinks() {
    semesterList.classList.toggle('open');
}

semesterMenu.addEventListener('mouseenter', showSemesterLinks);
semesterMenu.addEventListener('mouseleave', showSemesterLinks);

const mobileSemesterMenu = document.querySelector('#mobile-menu .semester-hover');
const mobileSemesterList = document.querySelector('#mobile-menu .semester-hover .semester-dropdown');
const mobileSemesterOption = document.querySelector('#mobile-menu .semester-hover .semester-dropdown .semester-option');

function showMobileSemesterLinks() {
    mobileSemesterList.classList.toggle('open');
}

for (let i = 0; i < mobileSemesterOption.length; i++) {
    mobileSemesterOption[i].addEventListener('click', showMobileLinks);
}

mobileSemesterMenu.addEventListener('click', showMobileSemesterLinks);

//DARK MODE 

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const htmlEl = document.documentElement;
const savedTheme = localStorage.getItem('theme');

function setTheme(isDark) {
    if (isDark) {
        htmlEl.setAttribute('data-theme', 'dark');
        darkModeToggle.src = 'icons/clear_day_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
        localStorage.setItem('theme', 'dark');
    } else {
        htmlEl.removeAttribute('data-theme');
        darkModeToggle.src = 'icons/dark_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
        localStorage.setItem('theme', 'light');
    }
}

function shouldBeDark() {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 18;
}

if (savedTheme) {
    setTheme(savedTheme === 'dark');
} else {
    setTheme(shouldBeDark());
}

setInterval(function(){
    if (!localStorage.getItem('theme')) {
        setTheme(shouldBeDark());
    }
}, 60000);

darkModeToggle.addEventListener('click', function() {
    const isDarkNow = htmlEl.getAttribute('data-theme') === 'dark';
    setTheme(!isDarkNow);
});