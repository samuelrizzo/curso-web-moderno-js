/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function verificaTriangulo(a, b, c) {
    if (a === b && b === c && c === a) {
        return console.log('O triângulo é do tipo equilátero')
    } else if ((a === b && c != a) || (a === c && b != a) || (c === b && a != c)) {
        return console.log('O triângulo é do tipo isósceles')
    } else {
        console.log('O triângulo é escaleno')
    }
}

verificaTriangulo(2,1,3)