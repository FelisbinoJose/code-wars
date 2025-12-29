const { Module } = require("@sinclair/typebox");

function narcissistic(value) {
    const str = String(value);
    const potencia = BigInt(str.length);

    let soma = 0n;

    for (const digito of str) {
        const d = BigInt(digito);
        soma += d ** potencia;
    }

    return soma === BigInt(value);
}

module.exports = { narcissistic };