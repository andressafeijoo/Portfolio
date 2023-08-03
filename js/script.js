const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "assunto": e.target.elements["assunto"].value,
        "mensagem": e.target.elements["mensagem"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = './index.html'
})