function animarScroll(){
            const elementos = document.querySelectorAll('.fade-in');
            elementos.forEach((el, index) => {
                const topoElemento = el.getBoundingClientRect().top;
                const alturaTela = window.innerHeight;
                if(topoElemento < alturaTela - 50) {
                    setTimeout(() => {
                    el.classList.add('ativo');
                }, index* 200);
            }
            }); 
        }
        window.addEventListener('scroll',
             animarScroll);
        window.addEventListener('load', animarScroll);
