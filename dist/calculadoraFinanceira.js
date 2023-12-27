"use strict";
var CalculadoraFinanceira = /** @class */ (function () {
    function CalculadoraFinanceira() {
    }
    CalculadoraFinanceira.prototype.calculaValorFuturo = function (investimentoInicial, taxaJuros, periodo) {
        var valorFuturo = investimentoInicial * Math.pow(1 + taxaJuros, periodo);
        return valorFuturo;
    };
    CalculadoraFinanceira.prototype.calculaPagamentoEmprestimo = function (valorEmprestimo, taxaJuros, periodo) {
        var taxaMensal = taxaJuros / 12 / 100;
        var prestacao = valorEmprestimo * (taxaMensal / (1 - Math.pow(1 + taxaMensal, -periodo)));
        return prestacao;
    };
    CalculadoraFinanceira.prototype.calculaJurosCompostos = function (principal, taxaJuros, periodo) {
        var montanteFinal = principal * Math.pow(1 + taxaJuros / 100, periodo);
        return montanteFinal;
    };
    return CalculadoraFinanceira;
}());
// Exemplo de uso
var calculadora = new CalculadoraFinanceira();
var investimentoInicial = 1000;
var taxaJuros = 0.05;
var periodo = 3;
// Calcula o valor futuro do investimento
var valorFuturo = calculadora.calculaValorFuturo(investimentoInicial, taxaJuros, periodo);
console.log("Valor Futuro do Investimento: ".concat(valorFuturo.toFixed(2)));
// Exemplo de empréstimo
var valorEmprestimo = 5000;
var periodoEmprestimo = 12;
// Calcula o pagamento mensal do empréstimo
var prestacaoEmprestimo = calculadora.calculaPagamentoEmprestimo(valorEmprestimo, taxaJuros, periodoEmprestimo);
console.log("Presta\u00E7\u00E3o Mensal do Empr\u00E9stimo: ".concat(prestacaoEmprestimo.toFixed(2)));
// Exemplo de juros compostos
var principal = 2000;
// Calcula o montante final com juros compostos
var montanteFinal = calculadora.calculaJurosCompostos(principal, taxaJuros, periodo);
console.log("Montante Final com Juros Compostos: ".concat(montanteFinal.toFixed(2)));
