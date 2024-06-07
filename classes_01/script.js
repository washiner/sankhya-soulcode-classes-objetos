
class Forma {
    calcularArea() {
      return 0;
    }
  
    calcularPerimetro() {
      return 0;
    }
  }

  class Retangulo extends Forma {
    constructor(largura, altura) {
      super(); 
      this.largura = largura; 
      this.altura = altura;
    }
  
    calcularArea() {
      return this.largura * this.altura;
    }
  
    calcularPerimetro() {
      return 2 * (this.largura + this.altura);
    }
  }
  
  class Circulo extends Forma {
    constructor(raio) {
      super();
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * this.raio * this.raio;
    }
  
    calcularPerimetro() {
      return 2 * Math.PI * this.raio;
    }
  }
  
  class Triangulo extends Forma {
    constructor(base, altura, ladoA, ladoB, ladoC) {
      super();
      this.base = base;
      this.altura = altura;
      this.ladoA = ladoA;
      this.ladoB = ladoB;
      this.ladoC = ladoC;
    }
  
    calcularArea() {
      return (this.base * this.altura) / 2;
    }

    calcularPerimetro() {
      return this.lado1 + this.lado2 + this.lado3;
    }
  }
  
  let retangulo = new Retangulo(12, 7);
  console.log(`retangulo: ${retangulo.calcularArea()}`);
  console.log(`perimetro do retangulo: ${retangulo.calcularPerimetro()}`);
  
  let circulo = new Circulo(7);
  console.log(`circulo: ${circulo.calcularArea()}`);
  console.log(`perimetro do circulo: ${circulo.calcularPerimetro()}`);
  
  let triangulo = new Triangulo(10, 5, 6, 8, 10);
  console.log(`area do tringulo: ${triangulo.calcularArea()}`);
  console.log(`perimetro do tringulo: ${triangulo.calcularPerimetro()}`);
  