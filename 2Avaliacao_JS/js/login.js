$("#formLogin").submit(function(e){
    e.preventDefault();

    let dados = {
        email: $("#email").val(),
        senha: $("#senha").val()
    };

    if (validarUsuario(dados)) {
        window.location.href = "mensagens.html";
    } else {
        $("#msgErro").text("E-mail ou senha inválidos");
    }
});
