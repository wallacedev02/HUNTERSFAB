fetch('js/backend.json')
.then(response => response.json())
.then(data => {
    //SALVAR OS DADOS VINDOS DO BACK-END LOCALMENTE 
    //VAMOS UTILIZAR LOCALSTORAGE
    localStorage.setItem('jogos', JSON.stringify(data));
    console.log('Dados dos produtos salvos no localstorage');



    //SIMULAR CARREGAMENTO OLINE
    setTimeout(() => {

        //ESVAZIAR A AREA DE PRODUTOS
        $("#jogos").empty();

        
        data.forEach(jogos =>{
            var jogoHTML = `
    
            <div class="jogo-card">
              <a data-id="${jogos.id}" href="#" class="jogo">
                <div class="img-container">
                        <img src="${jogos.imagem}" width="120" height="120" alt="GTA V">
                </div>
                 <div class="nome-rating">
                    <strong><span>${jogos.nome}</span></strong>
                 </div>
              </a>
            </div>
    
            `;
    
            $("#jogos").append(jogoHTML);
        });

        $(".jogo").on('click', function () {
            var id = $(this).attr('data-id');
            localStorage.setItem('detalhe', id);
            app.views.main.router.navigate('/detalhes/');
        });

    }, 1000);



})
.catch(error => console.error('Erro ao fazer fetch dos dados: '+error));