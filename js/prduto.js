function iniciarProduto() {
    try {
        let idP = getProductIdFromUrl();
        let get_url = 'http://127.0.0.1:3000/produtos/' + idP
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", get_url, false);
        xhttp.send();
        let produto_atual = JSON.parse(xhttp.responseText);
        document.getElementById("nomeProduto").textContent = produto_atual.nome;
    }
    catch (e) {
        document.getElementById("nomeProduto").textContent = "Erro";
    }
    
}
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }

  