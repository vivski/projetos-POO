let divResultadoDoFiltro = document.getElementById('resultadoDoFiltro');



function carregarListaECartoes(){
    divResultadoDoFiltro.innerHTML = '';
    // Percorre o array de elevadores
    for (let i = 0; i < cartao.length; i++) {
        let cartoesEmHTML = '';

        //Percorre o atributo listaDePassageiros de um vendedor
        for (let j = 0; j < cartao[i].listaDeCartoes.length; j++) {
            cartoesEmHTML += `
            <div class='card'>
                    <img class='imagemCartao' src='./img-cartoes/${cartao[i].listaDeCartoes[j].img}'>
                <div class='info'><div class='nome'>${cartao[i].listaDeCartoes[j].nome}</div>
                    <div class='bandeira'>${cartao[i].listaDeCartoes[j].bandeira}</div>
                    <div class='descricao'>${cartao[i].listaDeCartoes[j].descricao}</div>
                    <div class='valorMin'><div class='infoValor'>Limite Máximo:</div>${cartao[i].listaDeCartoes[j].valorMinimo}</div>
                </div>
            </div>
            `;    
        }
        divResultadoDoFiltro.innerHTML += `
            <div class='container1'>
                <div class='container'>
                    ${cartoesEmHTML}
                </div>
            </div>
            `;
    }
}