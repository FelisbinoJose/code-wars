function sum(valorInicial) {
    let total = valorInicial || 0;

    return function interna(novoValor) {
        if (novoValor === undefined) {
            return total;
        }

        total += novoValor;
        return interna;
    };
}

module.exports = { sum };
