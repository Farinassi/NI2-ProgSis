//LISTANDO PAIS
var lugarPaises = document.getElementById("lista")
const api = "http://localhost:8080/pais"
const lista = fetch(api)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < data.content.length; i++) {
            lugarPaises.innerHTML += `
            <td class="td">${data.content[i].id}</td>
            <td >${data.content[i].nome}</td>
            <td>${data.content[i].continente}</td>
            <td>${data.content[i].populacao}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="edita_pais.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" onclick="deletarPais(${data.content[i].id})">Excluir</button></li>
                </ul>
            </td>`
        }

    })
//FIM DO LISTA PAIS


//DELETAR PAIS
async function deletarPais(id) {
    const URL = `http://localhost:8080/pais/${id}`;
    const deleteRequest = {
        method: 'DELETE'
    };
    fetch(URL, deleteRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
}
//FIM DELETAR PAIS


//CRIAR PAIS
const txtId = document.getElementById('id')
const txtNome = document.getElementById('nome')
const txtContinente = document.getElementById('continente')
const txtPopulacao = document.getElementById('populacao')

function criarPais() {
    const dadosPais = {
        'nome': txtNome.value,
        'continente': txtContinente.value,
        'populacao': txtPopulacao.value,
    }
    asyncCriarPais(dadosPais);
}

function asyncCriarPais(dadosPais) {
    const postRequest = {
        method: 'POST',
        body: JSON.stringify(dadosPais),
        headers: { 'Content-type': 'application/json' }
    };

    fetch(api, postRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())

}
//FIM CRIAR PAIS

//ATUALIZAR PAIS
function atualizarPais() {
    const dadosPais = {
        'id': txtId.value,
        'nome': txtNome.value,
        'continente': txtContinente.value,
        'populacao': txtPopulacao.value,
    }
    asyncAtualizarPais(dadosPais);
}

function asyncAtualizarPais(dadosPais) {
    const postRequest = {
        method: 'PUT',
        body: JSON.stringify(dadosPais),
        headers: { 'Content-type': 'application/json' }
    };

    fetch(api, postRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())

}
//FIM ATUALIZAR PAIS

//GET POR ID
function pesquisarPaisId(event) {
    event.preventDefault();
    id = txtId.value
    asyncPesquisarPaisId(id);
}

async function asyncPesquisarPaisId(id) {
    const getID = `http://localhost:8080/pais/${id}`

    fetch(getID)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())
        .then(data => {
            lugarPaises.innerHTML = `
            <td class="td">${data.id}</td>
            <td >${data.nome}</td>
            <td >${data.continente}</td>
            <td >${data.populacao}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="edita_pais.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" onclick="deletarPais(${data.id})">Excluir</button></li>
                </ul>
            </td>`
        }

        )


}
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", pesquisarPaisId);

//FIM GET POR ID

//PESQUISAR POR NOME
const formulario2 = document.getElementById("formulario2");
formulario2.addEventListener("submit", pesquisarPaisNome);

function pesquisarPaisNome(event) {
    event.preventDefault();
    nome = txtNome.value

    asyncPesquisarPaisNome(nome);
}

async function asyncPesquisarPaisNome(nome) {
    const getNome = `http://localhost:8080/pais/pesquisa?nome=${nome}`

    fetch(getNome)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())
        .then(data => {
            console.log(data[0])
            for (let i = 0; i < data.length; i++) {
                lugarPaises.innerHTML = `
                <td class="td">${data[i].id}</td>
                <td >${data[i].nome}</td>
                <td >${data[i].continente}</td>
                <td >${data[i].populacao}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="edita_pais.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" onclick="deletarPais(${data.id})">Excluir</button></li>
                </ul>
            </td>`
            }
        }

        )


}