class ContaBancaria {
  constructor(numeroDaConta, saldoInicial) {
    this.numeroDaConta = numeroDaConta;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}.`);
    } else {
      console.log("O valor do depósito deve ser positivo.");
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}.`);
    } else if (valor > this.saldo) {
      console.log("Saldo insuficiente.");
    } else {
      console.log("O valor do saque deve ser positivo.");
    }
  }

  verificarSaldo() {
    console.log(`Saldo atual: R$${this.saldo}.`);
  }
}

const minhaConta = new ContaBancaria("12345-6", 1000);

minhaConta.verificarSaldo();

minhaConta.depositar(100);

minhaConta.verificarSaldo();

minhaConta.sacar(1000);

minhaConta.sacar(500);

minhaConta.verificarSaldo();
