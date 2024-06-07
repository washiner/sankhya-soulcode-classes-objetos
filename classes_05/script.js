class Produto {
  constructor(nome, preco, quantidadeEmEstoque) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEmEstoque = quantidadeEmEstoque;
  }
}

class CarrinhoDeCompras {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto, quantidade) {
    if (quantidade > 0 && quantidade <= produto.quantidadeEmEstoque) {
      this.produtos.push({ produto, quantidade });
      produto.quantidadeEmEstoque -= quantidade;
      console.log(`${quantidade} unidade(s) de ${produto.nome} adicionada(s) ao carrinho.`);
    } else {
      console.log("Quantidade inválida ou estoque insuficiente.");
    }
  }

  calcularTotal() {
    let total = 0;
    this.produtos.forEach(item => {
      total += item.produto.preco * item.quantidade;
    });
    return total;
  }

  finalizarCompra() {
    if (this.produtos.length > 0) {
      let total = this.calcularTotal();
      this.produtos = [];
      console.log(`Compra finalizada. Total a pagar: R$${total.toFixed(2)}.`); // Informa o total da compra
    } else {
      console.log("O carrinho está vazio.");
    }
  }
}

let produto1 = new Produto("Terno", 2, 4);
let produto2 = new Produto("Cinto", 4, 8);
let produto3 = new Produto("Gravata", 120, 1);

let meuCarrinho = new CarrinhoDeCompras();

meuCarrinho.adicionarProduto(produto1, 2);
meuCarrinho.adicionarProduto(produto2, 1);
meuCarrinho.adicionarProduto(produto3, 1);

let total = meuCarrinho.calcularTotal();
console.log(`Total da compra: R$${total.toFixed(2)}.`);

meuCarrinho.finalizarCompra();
