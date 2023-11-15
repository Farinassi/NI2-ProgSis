//LISTANDO JOGOS
var lugarJogos = document.getElementById("lista")
const api = "http://localhost:8080/jogos"
const lista = fetch(api)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < data.content.length; i++) {
            lugarJogos.innerHTML += `
            <td class="td">${data.content[i].id}</td>
            <td >${data.content[i].nome}</td>
            <td >${data.content[i].nomeB}</td>
            <td >${data.content[i].golsA}</td>
            <td >${data.content[i].golsB}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="edita_jogo.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" onclick="deletarJogo(${data.content[i].id})">Excluir</button></li>
                </ul>
            </td>`
        }

    })
//FIM DO LISTA JOGOS


//DELETAR JOGO
async function deletarJogo(id) {
    const URL = `http://localhost:8080/jogos/${id}`;
    const deleteRequest = {
        method: 'DELETE'
    };
    fetch(URL, deleteRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
}
//FIM DELETAR JOGOS


//CRIAR JOGOS
const txtId = document.getElementById('id')
const txtNome = document.getElementById('nome')
const txtNomeB = document.getElementById('nomeB')
const txtGolsA = document.getElementById('golsA')
const txtGolsB = document.getElementById('golsB')

function criarJogo() {
    const dadosJogo = {
        'nome': txtNome.value,
        'nomeB': txtNomeB.value,
        'golsA': txtGolsA.value,
        'golsB': txtGolsB.value
    }
    asyncCriarJogo(dadosJogo);
}

function asyncCriarJogo(dadosJogo) {
    const postRequest = {
        method: 'POST',
        body: JSON.stringify(dadosJogo),
        headers: { 'Content-type': 'application/json' }
    };

    fetch(api, postRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())

}
//FIM CRIAR JOGO

//ATUALIZAR JOGO
function atualizarJogo() {
    const dadosJogo = {
        'id': txtId.value,
        'nome': txtNome.value,
        'nomeB': txtNomeB.value,
        'golsA': txtGolsA.value,
        'golsB': txtGolsB.value
    }
    asyncAtualizarJogo(dadosJogo);
}

function asyncAtualizarJogo(dadosJogo) {
    const postRequest = {
        method: 'PUT',
        body: JSON.stringify(dadosJogo),
        headers: { 'Content-type': 'application/json' }
    };

    fetch(api, postRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())

}
//FIM ATUALIZAR JOGO

//GET POR ID
function pesquisarJogoId(event) {
    event.preventDefault();
    id = txtId.value
    asyncPesquisarJogoId(id);
}

async function asyncPesquisarJogoId(id) {
    const getID = `http://localhost:8080/jogos/${id}`

    fetch(getID)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())
        .then(data => {
            lugarJogos.innerHTML = `
            <td class="td">${data.id}</td>
            <td >${data.nome}</td>
            <td >${data.nomeB}</td>
            <td >${data.golsA}</td>
            <td >${data.golsB}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="edita_jogo.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" onclick="deletarJogo(${data.id})">Excluir</button></li>
                </ul>
            </td>`
        }

        )


}
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", pesquisarJogoId);

//FIM GET POR ID

//PESQUISAR POR NOME
const formulario2 = document.getElementById("formulario2");
formulario2.addEventListener("submit", pesquisarJogoNome);

function pesquisarJogoNome(event) {
    event.preventDefault();
    nome = txtNome.value

    asyncPesquisarJogoNome(nome);
}

async function asyncPesquisarJogoNome(nome) {
    const getNome = `http://localhost:8080/jogos/pesquisa?nome=${nome}`

    fetch(getNome)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())
        .then(data => {
            console.log(data[0])
            for (let i = 0; i < data.length; i++) {
                lugarJogos.innerHTML = `
                <td class="td">${data[i].id}</td>
                <td >${data[i].nome}</td>
                <td >${data[i].nomeB}</td>
                <td >${data[i].golsA}</td>
                <td >${data[i].golsB}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="edita_jogo.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" onclick="deletarJogo(${data.id})">Excluir</button></li>
                </ul>
            </td>`
            }
        }

        )


}