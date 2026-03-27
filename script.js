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