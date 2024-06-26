var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    var idSilo = req.body.idSilo;
    var dataHoje = req.body.dataHoje;

    medidaModel.buscarUltimasMedidas(idSilo, dataHoje).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarKpisHistorico(req, res) {

    var idSilo = req.body.idSilo;
    var dataHoje = req.body.dataHoje;

    medidaModel.buscarKpisHistorico(idSilo, dataHoje).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idSilo = req.params.idSilo;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idSilo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarAlertasDoSilo(req, res) {

    var idSilo = req.params.idSilo;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarAlertasDoSilo(idSilo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPaginaAlertas(req, res) {

    var idSilo = req.body.idSilo;
    var offSet = req.body.offSet;
    var limitSelect = req.body.limitSelect;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarPaginaAlertas(idSilo, offSet, limitSelect).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimoAlerta(req, res) {

    var idSilo = req.body.idSilo;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUltimoAlerta(idSilo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarKpisHistorico,
    buscarAlertasDoSilo,
    buscarPaginaAlertas,
    buscarUltimoAlerta

}