// Lista de amigos
let amigoSecreto = [];

// Adicionar um amigo
function adicionarAmigo() {
    const amigo = document.getElementById('amigo').value.trim();
    if (amigo !== '') {
        amigoSecreto.push(amigo);
        limparInput();
        mostrarLista();
    } else {
        alert('Informe um nome válido');
    }
}

// Limpar apenas o campo de input
function limparInput() {
    document.getElementById('amigo').value = '';
}

// Mostrar lista de amigos
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigoSecreto.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sortear amigo secreto
function sortearAmigo() {
    if (amigoSecreto.length === 0) {
        alert("Nenhum amigo cadastrado para sortear!");
        return;
    }
    const indice = Math.floor(Math.random() * amigoSecreto.length);
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <b>${amigoSecreto[indice]}</b>`;
}

// Reiniciar jogo
function reiniciarJogo() {
    amigoSecreto = [];
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById("resultado").innerHTML = '';
}