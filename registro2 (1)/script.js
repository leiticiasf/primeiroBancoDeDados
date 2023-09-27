const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("senha")
const novoLogin = document.getElementById("log")
const novoSenha = document.getElementById("sen")
const repete = document.getElementById("repSen")


var modal = document.getElementById("myModal");

var btn = document.getElementById("mybt");

var span = document.getElementsByClassName("close")[0];

function mybt(){
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
  }


function registro() {
    if (novoSenha.value == repete.value) {
        const usuario = { //variavel que possui variaveis, notação json (javascript object notation)
            login: novoLogin.value,  //atributos do usuario
            senha: novoSenha.value  //atributos do usuario 
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuario cadastrado com sucesso!");
        modal.style.display = "none";
    } else {
        alert("As senhas sao diferentes!");
    }
}

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == campoLogin.value && usuario.senha == campoSenha.value) {
                mensagem = "Logado com sucesso!"
                localStorage.setItem("logado", JSON.stringify(usuario))
                window.location.href = "./home/user.html";
                break;
            }
        }
    }
    alert(mensagem);
}

