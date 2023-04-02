let menuIcon = document.querySelector('.burger-icon');
let menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    menu.classList.contains('active') ? menuIcon.src = 'assets/shared/icon-close.svg' : menuIcon.src = 'assets/shared/icon-hamburger.svg';
});

let explore = document.querySelector('.content div:last-child a');

if (explore) {
    explore.onclick = () => {
        explore.classList.add('active');
    };
}