


function navLogin() {
    recuperarUser()
    if(user == null){
        window.location.href = "login.html";
    }
    else {
        window.location.href = "user.html"
    }
}

function navIndex() {
    window.location.href = "index.html";
}

