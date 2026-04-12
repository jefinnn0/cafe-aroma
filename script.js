function animarScroll(){
            const elementos = document.querySelectorAll('.fade-in');
            elementos.forEach((el) => {
                const topo = el.getBoundingClientRect().top;
                const alturaTela = window.innerHeight;
                if(topo < alturaTela - 100) {
                    el.classList.add('ativo');
                }
            }); 
        }
        document.addEventListener("DOMContentLoaded",
             animarScroll);
        window.addEventListener('scroll', animarScroll);
        