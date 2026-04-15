function animarScroll(){
            const elementos = document.querySelectorAll('.fade-in');
            elementos.forEach((el) => {
                const topo = el.getBoundingClientRect().top;
                const alturaTela = window.innerHeight;
                if(topo < alturaTela - 50) {
                    el.classList.add('ativo');
                }
            }); 
        }
        document.addEventListener("DOMContentLoaded",
             animarScroll);
        window.addEventListener('scroll', animarScroll);
        
function enviarMensagem(){
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    const erroNome = document.getElementById("erro-nome");
    const erroEmail = document.getElementById("erro-email");
    const erroMensagem = document.getElementById("erro-mensagem");
    const sucesso = document.getElementById("mensagem-sucesso");
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroMensagem.textContent = "";
    nome.classList.remove("erro-input");
    email.classList.remove("erro-input");
    mensagem.classList.remove("erro-input");
    let valido = true;
    if(nome.value.trim() === ""){
        erroNome.textContent = "Digite seu nome";
        nome.classList.add("erro-input");
    valido = false;        
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value.trim() === ""){
        erroEmail.textContent = "Digite seu email";
        email.classList.add("erro-input");
        valido = false;
    } else if(!regexEmail.test(email.value)){
        erroEmail.textContent = "Email inválido (ex: nome@gmail.com)";
        email.classList.add("erro-input");
        valido = false;
    }
    if(mensagem.value.trim() === ""){
        erroMensagem.textContent = "Digite uma mensagem";
        mensagem.classList.add("erro-input");
        valido = false;}
    {
     if(valido){
        sucesso.style.display = "block";
        setTimeout(() => {
            sucesso.style.opacity = "1";
        }, 50);
        sucesso.style.opacity = "1";
        sucesso.style.transition = "0.5s";
        nome.value = "";
        email.value = "";
        mensagem.value = "";
    }

}}
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btn-enviar");
    botao.addEventListener("click", enviarMensagem);
});