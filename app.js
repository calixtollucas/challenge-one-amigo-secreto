//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function atualizaLista(){
    const listaAmigos = document.querySelector('ul#listaAmigos');
    listaAmigos.innerHTML = ''; //limpa a lista

    for(amigo of amigos){
        const li = document.createElement('li');
        li.textContent = amigo

        listaAmigos.appendChild(li);
    }
}

function adicionarAmigo(){
    const input = document.querySelector('input#amigo')
    //valida entrada
    if(input.value == ''){
        alert("insira um nome válido");
        return;
    }

    amigos.push(input.value);
    atualizaLista();
}

function sortearAmigo(){
    const listaResultado = document.querySelector('ul#resultado');

    //valida se a lista não está vazia.
    if(amigos.length <= 1){
        alert('adicione alguns amigos para iniciar');
        return;
    }

    //sorteio
    console.log(amigos.length)
    const numeroSorteado = Math.floor(Math.random() * (amigos.length));

    console.log(amigos[numeroSorteado]);
}