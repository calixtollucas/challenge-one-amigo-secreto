//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let sorteados = [];

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

    if(amigos.includes(input.value)){
        alert("Este nome já Existe, por favor insira outro")
        return;
    }

    amigos.push(input.value);
    atualizaLista();
}

function iniciarSorteio(){
    let sorteado

    //valida se a lista não está vazia.
    if(amigos.length <= 1){
        alert('adicione alguns amigos para iniciar');
        return;
    }

    //sorteio
    do {
        if(sorteados.sort().join()===amigos.sort().join()){
            alert("TODOS JÁ FORAM SORTEADOS")
            return;
        }
        sorteado = sortear()
    } while (sorteados.includes(sorteado));
    sorteados.push(sorteado);
    atualizaResultado(sorteado);
}

function atualizaResultado(sorteado){
    const listaResultado = document.querySelector('ul#resultado');

        const li = document.createElement("li");
        li.textContent = sorteado;

        listaResultado.appendChild(li);
}

function sortear(){
    const numeroSorteado = Math.floor(Math.random() * (amigos.length));
    const sorteado = amigos[numeroSorteado];

    return sorteado
}