document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("amigo");
    let listaAmigos = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado");
    let amigos = [];

    window.adicionarAmigo = function () {
        let nome = input.value.trim();
        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    };

    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `<li>Amigo secreto: <strong>${sorteado}</strong></li>`;
    };

    function atualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nome => {
            let li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
        });
    }
});
