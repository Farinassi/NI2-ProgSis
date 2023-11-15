//LISTANDO TIMES
var lugarTimes = document.getElementById("lista")
const api = "http://localhost:8080/times"
const lista = fetch(api)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < data.content.length; i++) {
            lugarTimes.innerHTML += `
            <td class="td">${data.content[i].id}</td>
            <td >${data.content[i].nome}</td>
            <td>${data.content[i].anofund}</td>
            <td>${data.content[i].cidade}</td>
            <td>${data.content[i].estado}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="edita_time.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" onclick="deletarTime(${data.content[i].id})">Excluir</button></li>
                </ul>
            </td>`
        }

    })
//FIM DO LISTA TIMES


//DELETAR TIME
async function deletarTime(id) {
    const URL = `http://localhost:8080/times/${id}`;
    const deleteRequest = {
        method: 'DELETE'
    };
    fetch(URL, deleteRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
}
//FIM DELETAR TIME


//CRIAR TIME
const txtId = document.getElementById('id')
const txtNome = document.getElementById('nome')
const txtAnoFund = document.getElementById('anofund')
const txtCidade = document.getElementById('cidade')
const txtEstado = document.getElementById('estado')

function criarTime() {
    const dadosTime = {
        'nome': txtNome.value,
        'anofund': txtAnoFund.value,
        'cidade': txtCidade.value,
        'estado': txtEstado.value
    }
    asyncCriarTime(dadosTime);
}

function asyncCriarTime(dadosTime) {
    const postRequest = {
        method: 'POST',
        body: JSON.stringify(dadosTime),
        headers: { 'Content-type': 'application/json' }
    };

    fetch(api, postRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())

}
//FIM CRIAR TIME

//ATUALIZAR TIME
function atualizarTime() {
    const dadosTime = {
        'id': txtId.value,
        'nome': txtNome.value,
        'anofund': txtAnoFund.value,
        'cidade': txtCidade.value,
        'estado': txtEstado.value
    }
    asyncAtualizarTime(dadosTime);
}

function asyncAtualizarTime(dadosTime) {
    const postRequest = {
        method: 'PUT',
        body: JSON.stringify(dadosTime),
        headers: { 'Content-type': 'application/json' }
    };

    fetch(api, postRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())

}
//FIM ATUALIZAR TIME

//GET POR ID
function pesquisarTimeId(event) {
    event.preventDefault();
    id = txtId.value
    asyncPesquisarTimeId(id);
}

async function asyncPesquisarTimeId(id) {
    const getID = `http://localhost:8080/times/${id}`

    fetch(getID)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())
        .then(data => {
            lugarTimes.innerHTML = `
            <td class="td">${data.id}</td>
            <td >${data.nome}</td>
            <td>${data.anofund}</td>
            <td>${data.cidade}</td>
            <td>${data.estado}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="edita_time.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" onclick="deletarTime(${data.id})">Excluir</button></li>
                </ul>
            </td>`
        }

        )


}
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", pesquisarTimeId);

//FIM GET POR ID

//PESQUISAR POR NOME
const formulario2 = document.getElementById("formulario2");
formulario2.addEventListener("submit", pesquisarTimeNome);

function pesquisarTimeNome(event) {
    event.preventDefault();
    nome = txtNome.value

    asyncPesquisarTimeNome(nome);
}

async function asyncPesquisarTimeNome(nome) {
    const getNome = `http://localhost:8080/times/pesquisa?nome=${nome}`

    fetch(getNome)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; })
        .then(resposta => resposta.json())
        .then(data => {
            console.log(data[0])
            for (let i = 0; i < data.length; i++) {
                lugarTimes.innerHTML = `
            <td class="td">${data[i].id}</td>
            <td >${data[i].nome}</td>
            <td>${data[i].anofund}</td>
            <td>${data[i].cidade}</td>
            <td>${data[i].estado}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="edita_time.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" onclick="deletarTime(${data.id})">Excluir</button></li>
                </ul>
            </td>`
            }
        }

        )


}