/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false */

function isDividedBy3(numero) {
    if ((numero % 3) === 0) {
        return true
    } else {
        return false
    }
}

console.log(isDividedBy3(3))
console.log(isDividedBy3(6))
console.log(isDividedBy3(9))
console.log(isDividedBy3(10))