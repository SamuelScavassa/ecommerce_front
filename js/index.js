let user

function getProdutos() {

    let url = "http://127.0.0.1:3000/produtos"
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();

    if (xhttp.status == 200) {
        var response = JSON.parse(xhttp.responseText)
        criarLista(response);
    }
    else {
        document.body.innerHTML = '<h1> Sem produtos ainda </h1>'
    }
    recuperarUser();
    if (user.nome != null) {
      document.getElementById("login").textContent = 'Olá, '+ user.nome
    }
}

function criarLista(lista) {

const table = document.createElement('table');
  table.setAttribute('id', 'tabela_index');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Adicione as cabeçalhos da tabela
  const header1 = document.createElement('th');
  header1.textContent = 'Produto';
  const header2 = document.createElement('th');
  header2.textContent = 'Descrição';
  const header3 = document.createElement('th');
  header3.textContent = 'Preço';
  thead.appendChild(header1);
  thead.appendChild(header2);
  thead.appendChild(header3);

  // Adicione as linhas da tabela
  for (const element of lista) {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.textContent = element.nome;
    const cell2 = document.createElement('td');
    cell2.textContent = element.descricao;
    const cell3 = document.createElement('td');
    cell3.textContent = element.preco;
    const cell4 = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = 'Comprar';
    button.addEventListener('click', function() {
        verProduto(element.id);
      });
    cell4.appendChild(button);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tbody.appendChild(row);
  }

  // Adicione a tabela ao corpo da página
  document.body.appendChild(table);
  // Adicione as cabeçalhos da tabela à tabela
  table.appendChild(thead);
  // Adicione as linhas da tabela à tabela
  table.appendChild(tbody);

}

function verProduto(id) {
    this.idP = id;
    window.location.href = "produto.html?id="+id
}

function recuperarUser() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    console.log(cookie)
    if (cookie.startsWith('user=')) {
      user =  JSON.parse(cookie.substring(5));
      console.log(user)
    }
  }
}


