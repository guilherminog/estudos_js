class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
    seApresentar() {
      return `Olá, meu nome é ${this.nome} e eu sou um ${this.cargo}.`;
    }
    trabalhar() {
      return `${this.nome} está realizando suas tarefas como ${this.cargo}.`;
    }
  }
  class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
      super(nome, idade, 'Gerente');
      this.departamento = departamento;
    }
    gerenciar() {
      return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
  }
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
      super(nome, idade, 'Desenvolvedor');
      this.linguagem = linguagem;
    }
    programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
    }
  }
  function exibirErro(mensagem) {
    const mensagemErro = document.createElement('p');
    mensagemErro.textContent = mensagem;
    document.body.appendChild(mensagemErro);
  }
  function criarFuncionario() {
    try {
      const nome = document.getElementById('nome').value;
      const idade = parseInt(document.getElementById('idade').value);
      const cargo = document.getElementById('cargo').value;
  
      if (!nome || isNaN(idade) || !cargo) {
        throw new Error('Por favor, preencha todos os campos corretamente.');
      }
  
      let funcionario;
  
      if (cargo === 'Gerente') {
        const departamento = document.getElementById('departamento').value;
        funcionario = new Gerente(nome, idade, departamento);
      } else if (cargo === 'Desenvolvedor') {
        const linguagem = document.getElementById('linguagem').value;
        funcionario = new Desenvolvedor(nome, idade, linguagem);
      } else {
        throw new Error('Cargo inválido.');
      } 
      exibirInformacoes(funcionario);
    } catch (error) {
      exibirErro(error.message);
    }
  }
  function exibirInformacoes(funcionario) {
    const apresentacao = document.createElement('p');
    apresentacao.textContent = funcionario.seApresentar();
    document.body.appendChild(apresentacao);
  
    const tarefas = document.createElement('p');
    tarefas.textContent = funcionario.trabalhar();
    document.body.appendChild(tarefas);
  
    if (funcionario instanceof Gerente) {
      const gerenciamento = document.createElement('p');
      gerenciamento.textContent = funcionario.gerenciar();
      document.body.appendChild(gerenciamento);
    } else if (funcionario instanceof Desenvolvedor) {
      const programacao = document.createElement('p');
      programacao.textContent = funcionario.programar();
      document.body.appendChild(programacao);
    }
  }
  