import {getCookieObject} from login.js;

let email
let senha

function getEmail() {
    email = document.getElementById("email").value;
}

function getSenha() {
    senha = document.getElementById("senha").value;
}

function login() {
    if(getCookieObject("user") != null) {
      window.location.href = "http://localhost:5500/views/user.html";
    }
    else {
      const data = {
        email: email,
        senha: senha
      };
     
      const url = "http://127.0.0.1:3000/login";
     
      const requestOptions = {
        method: "POST", // Método HTTP: POST
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(data) 
      };
      
      fetch(url, requestOptions)
        .then(response => response.json()) 
        .then(data => {
          console.log("Resposta do servidor:", data);
          setCookieObject("meuObjetoCookie", data, 30);
        })
        .catch(error => {
          console.error("Erro ao enviar a solicitação:", error);
        });
    }
}



function setCookieObject(nome, objeto, expiracaoDias) {
    var dataExpiracao = new Date();
    dataExpiracao.setTime(dataExpiracao.getTime() + (expiracaoDias * 24 * 60 * 60 * 1000));
    var expires = "expires=" + dataExpiracao.toUTCString();
    var objetoString = JSON.stringify(objeto);
    document.cookie = nome + "=" + objetoString + ";" + expires + ";path=/";
}
  
  
export function getCookieObject(nome) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(nome + '=') === 0) {
        var objetoString = cookie.substring(nome.length + 1, cookie.length);
        return JSON.parse(objetoString);
      }
    }
    return null;
}
  

  
  