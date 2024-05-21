class Lista{
    constructor(qtdMaximaCartoes){
        this.qtdMaximaCartoes = qtdMaximaCartoes;
        this.listaDeCartoes = [];
    }

    adicionarCartao(cartao){
        this.listaDeCartoes.push(cartao);
    }
}