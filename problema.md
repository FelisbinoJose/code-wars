# Número Narcisista (Armstrong)

Um Número Narcisista (ou Número de Armstrong) é um número positivo que é igual à soma de seus próprios dígitos, cada um elevado à potência do número de dígitos. Neste desafio consideramos base 10 (decimal).

## Exemplos

- 153 (3 dígitos):

```txt
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
```

- 1652 (4 dígitos) — não é narcisista:

```txt
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
```

## Enunciado

Implemente uma função que receba um inteiro positivo (maior que zero) e retorne `true` se o número for um número narcisista na base 10, ou `false` caso contrário.

Observações:

- Não é necessário validar entradas não numéricas ou números inválidos — todas as entradas serão inteiros positivos válidos.
- Retorne valores booleanos (`true`/`false`) conforme a linguagem utilizada.

## Entrada / Saída

- Entrada: um inteiro positivo `n > 0`.
- Saída: booleano — `true` se `n` for narcisista; `false` caso contrário.

## Exemplos de uso

```js
// JavaScript
isNarcissistic(153); // true
isNarcissistic(1652); // false
```

## Sugestão de testes

- Teste números de 1 a 1000 para ver casos conhecidos (1..9 sempre verdadeiros).
- Inclua casos limite (ex.: 9474 é um número de Armstrong de 4 dígitos).

## Dicas de implementação

- Converta o número em string para iterar pelos dígitos, ou extraia dígitos com operações matemáticas.
- Calcule a potência usando a quantidade de dígitos (por exemplo, `String(n).length` em JavaScript).
