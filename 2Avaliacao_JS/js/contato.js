$("#formContato").submit(function(e){
    e.preventDefault();

    let mensagem = {
        nome: $("#nome").val(),
        email: $("#email").val(),
        mensagem: $("#mensagem").val(),
        visualizada: false
    };

    inserirMensagem(mensagem);

    $("#msgSucesso").text("Mensagem enviada com sucesso!");
    $("#formContato")[0].reset();
});
