const featuresBtn = document.querySelector('.li-features');
const featuresSubMenu = document.querySelector('.menu-sub-features');
const companyBtn = document.querySelector('.li-company');
const companySubMenu = document.querySelector('.menu-sub-company');
const menuBtnOpen = document.querySelector('.btn-menu');
const menuBtnClose = document.querySelector('.btn-icon-close');
const menuContent = document.querySelector('.menu-content');

featuresBtn.addEventListener('click', () => {
    featuresSubMenu.classList.toggle('active');
    featuresBtn.classList.toggle('active');
});

companyBtn.addEventListener('click', () => {
    companySubMenu.classList.toggle('active');
    companyBtn.classList.toggle('active');
});

menuBtnOpen.addEventListener("click", () => {
    menuContent.classList.toggle('active');
});

menuBtnClose.addEventListener("click", () => {
    menuContent.classList.toggle('active');
});

window.addEventListener('click', (e) => {
    if (!featuresBtn.contains(e.target) && !featuresSubMenu.contains(e.target)) {
        featuresSubMenu.classList.remove('active');
        featuresBtn.classList.remove('active');
    }
    if (!companyBtn.contains(e.target) && !companySubMenu.contains(e.target)) {
        companySubMenu.classList.remove('active');
        companyBtn.classList.remove('active');
    }
});