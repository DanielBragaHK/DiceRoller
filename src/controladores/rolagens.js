let { rolagens, identificadorRolagem } = require("../bancodedados");

const { format } = require('date-fns');


const rolarDados = (req, res) => {
    const { nomeJogador, quantidadeDados, facesDoDado } = req.body;

    const horarioRolagem = new (Date);

    function gerarNumerosAleatorios(min, max, quantidade) {
        const numerosAleatorios = [];
        for (let i = 0; i < quantidade; i++) {
            const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            numerosAleatorios.push(numeroAleatorio);
        }
        return numerosAleatorios;
    }

    const numerosAleatorios = gerarNumerosAleatorios(1, facesDoDado, quantidadeDados);

    const resultadoTotal = numerosAleatorios.reduce((soma, valor) => soma + valor, 0);

    const rolagem = {
        numeroDaRolagem: identificadorRolagem++,
        momentoRolagem: format(horarioRolagem, 'yyyy-MM-dd HH:mm:ss'),
        nomeJogador,
        dadosRolados: numerosAleatorios,
        resultadoTotal

    }
    rolagens.push(rolagem);

    return res.status(201).json(rolagem)
};

const mostrarHistorico = (req, res) => {

    const historicoJogador = req.query.nome_jogador;



    const contaAtual = rolagens.filter((rolagem) => {
        return (rolagem.nomeJogador === historicoJogador);
    });

    if (contaAtual.length === 0) {
        return res.status(404).json({ mensagem: "Jogador não encontrado." });
    }

    const visualizaHistorico = {
        historicoDeRolagens: contaAtual
    }

    return res.status(200).json(visualizaHistorico);


};


module.exports = {
    rolarDados,
    mostrarHistorico

}