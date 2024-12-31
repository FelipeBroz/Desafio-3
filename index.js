class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'um ataque genérico'; // Caso o tipo não seja conhecido
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
  }
  
  // Exemplo de uso:
  const mago = new Heroi('Merlin', 120, 'mago');
  const guerreiro = new Heroi('Melquior', 30, 'guerreiro');
  const monge = new Heroi('Monjito', 112, 'monge');
  const ninja = new Heroi('Shen', 25, 'ninja');
  
  mago.atacar();       // Saída: O mago atacou usando magia.
  guerreiro.atacar();  // Saída: O guerreiro atacou usando espada.
  monge.atacar();      // Saída: O monge atacou usando artes marciais.
  ninja.atacar();      // Saída: O ninja atacou usando shuriken.
  