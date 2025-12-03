// BANCO LOCAL
let mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];

// Inserir mensagem
function inserirMensagem(msg) {
    mensagens.push(msg);
    localStorage.setItem("mensagens", JSON.stringify(mensagens));
}

// Obter mensagens
function obterMensagens() {
    return JSON.parse(localStorage.getItem("mensagens")) || [];
}

// Validar usuário
function validarUsuario(obj) {
    return obj.email === "admin@admin.com" && obj.senha === "1234";
}
