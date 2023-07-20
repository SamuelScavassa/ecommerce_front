async function iniciarProduto() {
    try {
        recuperarUser()
        let idP = getProductIdFromUrl();
        let get_url = 'http://127.0.0.1:3000/produtos/' + idP
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", get_url, false);
        await xhttp.send();
        let produto_atual = JSON.parse(xhttp.responseText);
        montarProduto(produto_atual.nome, produto_atual.descricao, produto_atual.preco)
        if (user != null) {
            document.getElementById("login").textContent = 'Olá, '+ user.nome
        }
    }
    catch (e) {
        document.getElementById("nomeProduto").textContent = "Erro";
    }
}

function montarProduto(nome, desc, preco) {
    document.getElementById("nomeProduto").textContent = nome;
    document.getElementById("descricao").textContent = desc;
    document.getElementById("preco").textContent = preco;
}
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

if (user != null) {
    document.getElementById("login").textContent = 'Olá, '+ user.nome
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
