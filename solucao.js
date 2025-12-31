function duplicateCount(text) {
    const str = String(text).toLowerCase();

    const listaText = [...str];

    let numeroDeRepetcao = 0;

    const duplicatas = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < str.length; j++) {
            if (i != j && listaText[j] !== undefined && listaText[i] === listaText[j] &&
                !duplicatas.includes(listaText[i])) {
                numeroDeRepetcao++;
                duplicatas.push(listaText[i])
            }
        }
    }

    return numeroDeRepetcao;
}

module.exports = { duplicateCount };
