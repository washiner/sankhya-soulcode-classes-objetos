class Contato {
  constructor(nome, telefone, email) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }
}

class Agenda {
  constructor() {
    this.contatos = [];
  }

  adicionarContato(contato) {
    this.contatos.push(contato);
  }

  removerContato(nome) {
    this.contatos = this.contatos.filter(contato => contato.nome !== nome);
  }

  pesquisarContato(nome) {
    return this.contatos.filter(contato => contato.nome.includes(nome));
  }

  exibirContatos() {
    this.contatos.forEach(contato => {
      console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
  }
}

let minhaAgenda = new Agenda();

minhaAgenda.adicionarContato(new Contato("Washiner", "6543-5568", "washiner@gmail.com"));
minhaAgenda.adicionarContato(new Contato("Shiro", "3895-4461", "shiro@gmail.com"));
minhaAgenda.adicionarContato(new Contato("Mel", "1176-2882", "mel@gmail.com"));

console.log("Contatos na agenda:");
minhaAgenda.exibirContatos();

console.log("\nPesquisa por 'Washiner':");
let resultadoPesquisa = minhaAgenda.pesquisarContato("Shiro");
resultadoPesquisa.forEach(contato => {
  console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
});

minhaAgenda.removerContato("Shiro");

console.log("\nContatos na agenda após remover Shiro:");
minhaAgenda.exibirContatos();
