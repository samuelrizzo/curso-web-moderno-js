/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function simples(capital, taxaJuros, tempo) {
    return (taxaJuros * tempo + capital)
}

function compostos(capital, taxaJuros, tempo) {
    let montante = capital * Math.pow(1 + taxaJuros/100, tempo);
    return montante.toFixed(2);
}

 

console.log(simples(100, 1.01, 5))
console.log(compostos(100, 1.01, 5))
