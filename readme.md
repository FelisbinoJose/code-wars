# 🔁 Conte o Número de Duplicatas

Este desafio consiste em criar uma função que **conte quantos caracteres distintos** aparecem **mais de uma vez** em uma string.

A verificação deve ser **insensível a maiúsculas e minúsculas** (_case-insensitive_).

---

## 📌 Regras do Desafio

- A entrada será uma **string**
- A string pode conter apenas:
  - Letras (`a-z`, `A-Z`)
  - Dígitos numéricos (`0-9`)
- Letras maiúsculas e minúsculas devem ser tratadas como **iguais**
- Deve-se contar **quantos caracteres distintos** aparecem **mais de uma vez**

---

## 🧪 Exemplos

| Entrada               | Saída | Explicação                         |
| --------------------- | ----- | ---------------------------------- |
| `"abcde"`             | `0`   | Nenhum caractere se repete         |
| `"aabbcde"`           | `2`   | `a` e `b` aparecem mais de uma vez |
| `"aabBcde"`           | `2`   | `a` e `b` (case-insensitive)       |
| `"indivisibilidade"`  | `1`   | `i` aparece várias vezes           |
| `"Indivisibilidades"` | `2`   | `i` e `s`                          |
| `"aA11"`              | `2`   | `a` e `1`                          |
| `"ABBA"`              | `2`   | `A` e `B`                          |

---

## 🎯 Objetivo

Implementar uma função que:

1. Normalize a string para evitar diferenças entre maiúsculas e minúsculas
2. Conte a frequência de cada caractere
3. Retorne quantos caracteres aparecem **mais de uma vez**

---
