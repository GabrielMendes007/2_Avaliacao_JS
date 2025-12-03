function carregarTabela() {
    let lista = obterMensagens();
    let tbody = $("#tabelaMensagens tbody");
    tbody.html("");

    lista.forEach((msg, index) => {
        let estilo = msg.visualizada ? "" : "bold";

        tbody.append(`
            <tr class="${estilo}">
                <td>${msg.nome}</td>
                <td>${msg.email}</td>
                <td>${msg.mensagem}</td>
                <td>
                    <button onclick="marcar(${index})">Visualizada</button>
                    <button onclick="excluir(${index})">Excluir</button>
                </td>
            </tr>
        `);
    });
}

function marcar(i) {
    if (confirm("Marcar como visualizada?")) {
        let lista = obterMensagens();
        lista[i].visualizada = true;
        localStorage.setItem("mensagens", JSON.stringify(lista));
        carregarTabela();
    }
}

function excluir(i) {
    if (confirm("Excluir esta mensagem?")) {
        let lista = obterMensagens();
        lista.splice(i, 1);
        localStorage.setItem("mensagens", JSON.stringify(lista));
        carregarTabela();
    }
}

carregarTabela();
