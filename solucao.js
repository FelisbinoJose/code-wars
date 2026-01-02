function sum(valorInicial) {
    if (valorInicial === undefined) {
        return 0;
    }

    let total = valorInicial;

    function interna(novoValor) {
        if (novoValor === undefined) {
            return total;
        }

        total += novoValor;
        return interna;
    }

    return interna;
}

module.exports = { sum };