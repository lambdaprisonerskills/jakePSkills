const toggleMenu = () => {
    menu.classList.toggle("menu--open");
};
    const menu = document.querySelector('.menu');
    
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', toggleMenu);
    
    const x_it = document.querySelector('.exit');
    x_it.addEventListener('click', toggleMenu);
    
    
   
