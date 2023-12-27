class CalculadoraFinanceira {
    calculaValorFuturo(investimentoInicial: number, taxaJuros: number, periodo: number): number {
      const valorFuturo = investimentoInicial * Math.pow(1 + taxaJuros, periodo);
      return valorFuturo;
    }
  
    calculaPagamentoEmprestimo(valorEmprestimo: number, taxaJuros: number, periodo: number): number {
      const taxaMensal = taxaJuros / 12 / 100;
      const prestacao = valorEmprestimo * (taxaMensal / (1 - Math.pow(1 + taxaMensal, -periodo)));
      return prestacao;
    }
  
    calculaJurosCompostos(principal: number, taxaJuros: number, periodo: number): number {
      const montanteFinal = principal * Math.pow(1 + taxaJuros / 100, periodo);
      return montanteFinal;
    }
  }
  
  // Exemplo de uso
  const calculadora = new CalculadoraFinanceira();
  
  const investimentoInicial = 1000;
  const taxaJuros = 0.05;
  const periodo = 3;
  
  // Calcula o valor futuro do investimento
  const valorFuturo = calculadora.calculaValorFuturo(investimentoInicial, taxaJuros, periodo);
  console.log(`Valor Futuro do Investimento: ${valorFuturo.toFixed(2)}`);
  
  // Exemplo de empréstimo
  const valorEmprestimo = 5000;
  const periodoEmprestimo = 12;
  
  // Calcula o pagamento mensal do empréstimo
  const prestacaoEmprestimo = calculadora.calculaPagamentoEmprestimo(valorEmprestimo, taxaJuros, periodoEmprestimo);
  console.log(`Prestação Mensal do Empréstimo: ${prestacaoEmprestimo.toFixed(2)}`);
  
  // Exemplo de juros compostos
  const principal = 2000;
  
  // Calcula o montante final com juros compostos
  const montanteFinal = calculadora.calculaJurosCompostos(principal, taxaJuros, periodo);
  console.log(`Montante Final com Juros Compostos: ${montanteFinal.toFixed(2)}`);
  