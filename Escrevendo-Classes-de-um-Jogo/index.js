class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'fez um ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou ${ataque}`);
    }
}


let heroi1 = new Heroi("Aragorn", 87, "guerreiro");
let heroi2 = new Heroi("Gandalf", 2019, "mago");

heroi1.atacar();  
heroi2.atacar();  
