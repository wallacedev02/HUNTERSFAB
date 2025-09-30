//RECUPERAR O ID DETALHE DO LOCALSTORAGE

var id = parseInt(localStorage.getItem('detalhe'));

//PEGAR OS PRODUTOS DO LOCAL STORAGE

var jogos = JSON.parse(localStorage.getItem('jogos'));

var jogo = jogos.find(jogos => jogos.id === id);

if (jogo){
    //TEM O ITEM
    console.log('Produto encontrado: ',jogo);

    //ALIMENTAR COM OS VALORES DO ITEM
    $("#imagem-detalhe").attr('src',jogo.imagem);
    $("#nome-detalhe").html(jogo.nome);
    $("#descricao-detalhe").html(jogo.descricao);
    $("#explicacao-detalhe1").html(jogo.explicacao1);
    $("#explicacao-detalhe2").html(jogo.explicacao2);
    $("#explicacao-detalhe3").html(jogo.explicacao3);

    // PREENCHER TABELA 0
    var tabelaDetalhes0 = $("#tabdetalhes0");
    jogo.detalhes.forEach(detalhe => {
        var linha = `
        <tr>
            <td>${detalhe.caracteristica}</td>
            <td>${detalhe.detalhes}</td>

        </tr>`;
        tabelaDetalhes0.append(linha);
    });

    // PREENCHER TABELA 1
    var tabelaDetalhes1 = $("#tabdetalhes1");
    jogo.detalhes1.forEach(detalhe1 => {
        var linha1 = `
        <tr>
            <td>${detalhe1.caracteristica1}</td>
            <td>${detalhe1.detalhes1}</td>
        </tr>`;
        tabelaDetalhes1.append(linha1);
    });

    // PREENCHER TABELA 2
    var tabelaDetalhes2 = $("#tabdetalhes2");
    jogo.detalhes2.forEach(detalhe2 => {
        var linha2 = `
        <tr>
            <td>${detalhe2.caracteristica2}</td>
            <td>${detalhe2.detalhes2}</td>
        </tr>`;
        tabelaDetalhes2.append(linha2);
    });

}
else {
    //NAO TEM O ITEM
    console.log('Produto não encontrado');
}

