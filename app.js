const navSlide  = () => {
    const RLista = document.querySelector('.RLista');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    RLista.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            if (link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinksFade 0.5s ease forwards ${index /7+0.5}s`;
            }
        });  
        
        RLista.classList.toggle('obrot');
    });
    
}

const app = () =>{
    navSlide();
}

app();