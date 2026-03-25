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