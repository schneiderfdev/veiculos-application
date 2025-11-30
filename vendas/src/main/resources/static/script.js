function mudarTela(tela) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  document.getElementById(tela).classList.add('ativa');
}

function excluir(botao) {
  botao.closest("tr").remove();
}

// ✅ CAPTURA O FORMULÁRIO DE CADASTRO
const botaoSalvar = document.querySelector("#cadastro button");

botaoSalvar.addEventListener("click", () => {
  const inputs = document.querySelectorAll("#cadastro input");

  const modelo = inputs[0].value;
  const marca  = inputs[1].value;
  const ano    = inputs[2].value;
  const preco  = inputs[3].value;

  // ✅ VALIDAÇÃO SIMPLES
  if (!modelo || !marca || !ano || !preco) {
    alert("Preencha todos os campos!");
    return;
  }

  // ✅ ADICIONA NA TABELA ADMIN
  const tabela = document.getElementById("tabela");

  tabela.innerHTML += `
    <tr>
      <td>${modelo}</td>
      <td>${marca}</td>
      <td>${ano}</td>
      <td>R$ ${preco}</td>
      <td><button onclick="excluir(this)">Excluir</button></td>
    </tr>
  `;

  // ✅ LIMPA OS CAMPOS
  inputs.forEach(input => input.value = "");

  // ✅ MUDA AUTOMATICAMENTE PARA A TELA ADMIN
  mudarTela("admin");
});
