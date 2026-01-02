# 🧩 Quebra-Cabeça Nº 1 — Soma Encadeada

## 📌 Descrição do Desafio

O objetivo deste desafio é criar uma função chamada **`sum`** que permita realizar **adições encadeadas**, ou seja, a função deve poder ser chamada várias vezes seguidas, acumulando valores, até que seja chamada **sem argumentos**, indicando o fim da operação.

---

## 🎯 Requisitos

- A função deve aceitar **chamadas encadeadas**
- Cada chamada recebe **um número**
- A chamada final **não recebe argumentos**
- O retorno final deve ser a **soma de todos os números passados**
- Se nenhum número for passado, o retorno deve ser **`0`**

---

## 🧪 Exemplos de Uso

```js
sum(4)(5)(9)(); // => 18
sum(5)(); // => 5
sum(); // => 0
```
