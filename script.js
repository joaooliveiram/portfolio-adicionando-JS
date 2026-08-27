console.log("Script carregado com sucesso!");
const nome = document.querySelector("#Nome");
const email = document.querySelector("#Email");
const mensagem = document.querySelector("#Mensagem");

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    let enviarEmail = true; 


    if (!Nome.value || !Email.value || !Mensagem.value) {
        alert("Por favor, preencha todos os campos.");
        console.log("Email não enviado!");
        event.preventDefault(); // Impede o envio do formulário para que possa processar os dados
        enviarEmail = false;
    } else {
        console.log("Email enviado!");
        alert("Email enviado com sucesso!");
    }
});

//inicialização da pagina para mobile

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        menuToggle.querySelector("i").classList.toggle("fa-bars");
        menuToggle.querySelector("i").classList.toggle("fa-times");
    });
});

//rolagem suave para os links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});