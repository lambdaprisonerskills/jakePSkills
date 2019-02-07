const toggleMenu = () => {
    menu.classList.toggle("menu--open");
};
    const menu = document.querySelector('.menu');
    
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', toggleMenu);
    
    const x_it = document.querySelector('.exit');
    x_it.addEventListener('click', toggleMenu);
    
    const topMenu = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          setTimeout(window.scrollTo({

          }),1000);
    };
    const to_top = document.querySelector('.toTop');
    to_top.addEventListener('click', topMenu);
    const arrow_top = document.querySelector('.topArrow');
    arrow_top.addEventListener('click', topMenu);

    // When h2 tag is clicked the box text color toggles white and black 
    class Box {
        constructor(element) {
          this.element = element;
          this.hover = element.querySelector('h2');
          this.hover.addEventListener('click', () => this.boxClick())
          console.log(this.hover);
        }

        boxClick() {
          this.element.classList.toggle('color-on');    
        }
      }
      let newBox = document.querySelectorAll('.box').forEach(box => new Box(box));
      