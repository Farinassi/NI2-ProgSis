//LISTANDO CIDADES
var lugarCidades = document.getElementById("lista")
const api = "http://localhost:8080/cidades"
const lista = fetch(api)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < data.content.length; i++) {
            lugarCidades.innerHTML += `
            <td class="td">${data.content[i].id}</td>
            <td >${data.content[i].nome}</td>
            <td>${data.content[i].estado}</td>
            <td>${data.content[i].pais}</td>
            <td>${data.content[i].populacao}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="edita_cidade.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" onclick="deletarCidade(${data.content[i].id})">Excluir</button></li>
                </ul>
            </td>`
        }

    })
//FIM DO LISTA CIDADE


//DELETAR CIDADE
async function deletarCidade(id) {
    const URL = `http://localhost:8080/cidades/${id}`;
    const deleteRequest = {
        method: 'DELETE'
    };
    fetch(URL, deleteRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
}
//FIM DELETAR CIDADE


//CRIAR CIDADE
const txtId = document.getElementById('id')
const txtNome = document.getElementById('nome')
const txtEstado = document.getElementById('estado')
const txtPais = document.getElementById('pais')
const txtPopulacao = document.getElementById('populacao')

function criarCidade() {
    const dadosCidade = {
        'nome': txtNome.value,
        'estado': txtEstado.value,
        'pais': txtPais.value,
        'populacao': txtPopulacao.value,
    }
    asyncCriarCidade(dadosCidade);
}

function asyncCriarCidade(dadosCidade) {
    const postRequest = {
        method: 'POST',
        body: JSON.stringify(dadosCidade),
        headers: { 'Content-type': 'application/json' }
    };

    fetch(api, postRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())

}
//FIM CRIAR CIDADE

//ATUALIZAR CIDADE
function atualizarCidade() {
    const dadosCidade = {
        'id': txtId.value,
        'nome': txtNome.value,
        'estado': txtEstado.value,
        'pais': txtPais.value,
        'populacao': txtPopulacao.value,
    }
    asyncAtualizarCidade(dadosCidade);
}

function asyncAtualizarCidade(dadosCidade) {
    const postRequest = {
        method: 'PUT',
        body: JSON.stringify(dadosCidade),
        headers: { 'Content-type': 'application/json' }
    };

    fetch(api, postRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())

}
//FIM ATUALIZAR CIDADE

//GET POR ID
function pesquisarCidadeId(event) {
    event.preventDefault();
    id = txtId.value
    asyncPesquisarCidadeId(id);
}

async function asyncPesquisarCidadeId(id) {
    const getID = `http://localhost:8080/cidades/${id}`

    fetch(getID)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())
        .then(data => {
            lugarCidades.innerHTML = `
            <td class="td">${data.id}</td>
            <td >${data.nome}</td>
            <td>${data.estado}</td>
            <td>${data.pais}</td>
            <td>${data.populacao}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="edita_cidade.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" onclick="deletarCidade(${data.id})">Excluir</button></li>
                </ul>
            </td>`
        }

        )


}
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", pesquisarCidadeId);

//FIM GET POR ID

//PESQUISAR POR NOME
const formulario2 = document.getElementById("formulario2");
formulario2.addEventListener("submit", pesquisarCidadeNome);

function pesquisarCidadeNome(event) {
    event.preventDefault();
    nome = txtNome.value

    asyncPesquisarCidadeNome(nome);
}

async function asyncPesquisarCidadeNome(nome) {
    const getNome = `http://localhost:8080/cidades/pesquisa?nome=${nome}`

    fetch(getNome)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())
        .then(data => {
            console.log(data[0])
            for (let i = 0; i < data.length; i++) {
                lugarCidades.innerHTML = `
                <td class="td">${data[i].id}</td>
                <td >${data[i].nome}</td>
                <td>${data[i].estado}</td>
                <td>${data[i].pais}</td>
                <td>${data[i].populacao}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="edita_cidade.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" onclick="deletarCidade(${data.id})">Excluir</button></li>
                </ul>
            </td>`
            }
        }

        )


}