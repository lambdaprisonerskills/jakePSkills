const toggleMenu = () => {
    menu.classList.toggle("menu--open");
};
    const menu = document.querySelector('.menu');
    
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', toggleMenu);
    
    const x_it = document.querySelector('.exit');
    x_it.addEventListener('click', toggleMenu);
    
    // const hover = document.querySelectorAll('.menu ul li');
    //     for ( i=0; i<hover.length;i++){
    //     hover[i].addEventListener('mouseover', e =>{
    //         e.target.style.color = "white";
    //         e.target.style.backgroundColor = "black";
    //     setTimeout(function() {
    //     e.target.style.color = "";
    //     e.target.style.backgroundColor = "";
    //         }, 500);
    //     }, false);
    // };
