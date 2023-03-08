/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores */

function div(x, y) {
    let resultado = Math.floor(x / y)
    let resto = x % y
    console.log(`Resto: ${resto} - Resultado: ${resultado}`)
}

div(5,2)