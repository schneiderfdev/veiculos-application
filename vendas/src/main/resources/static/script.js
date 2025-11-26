const API_URL = "http://localhost:8080/veiculos";

function listar() {
    fetch(API_URL)
        .then(res => res.json())
        .then(dados => {
            const tabela = document.getElementById("tabela-veiculos");
            tabela.innerHTML = "";
            dados.forEach(v => {
                tabela.innerHTML += `
                    <tr>
                        <td>${v.id}</td>
                        <td>${v.modelo}</td>
                        <td>${v.marca}</td>
                        <td>${v.ano}</td>
                        <td>R$ ${v.preco}</td>
                        <td>${v.estoque}</td>
                        <td><button onclick="excluir(${v.id})">Excluir</button></td>
                    </tr>
                `;
            });
        });
}

function salvar() {
    const veiculo = {
        modelo: document.getElementById("modelo").value,
        marca: document.getElementById("marca").value,
        ano: Number(document.getElementById("ano").value),
        preco: Number(document.getElementById("preco").value),
        estoque: Number(document.getElementById("estoque").value)
    };
    fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(veiculo)
    })
    .then(res => res.ok ? listar() : console.error("Erro ao salvar"))
    .then(() => limparCampos());
}

function excluir(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(res => res.ok ? listar() : console.error("Erro ao excluir"));
}

function limparCampos() {
    document.getElementById("modelo").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("estoque").value = "";
}

window.onload = listar;
