class Personagem{
    constructor (nome, health, dano, dex){
        this.nome = nome;
        this.hp = health;
        this.dano = dano;
        this.destreza = dex;
    }
}

class Magia{
    constructor (nome, dano){
        this.nome = nome;
        this.dano = dano;
    }
}

const magias = [new Magia("Jorrada de água", 7) , new Magia("Bola de Fogo", 10)];
                                      //Nome, HP, Dano, Dex;
const charKoboldo = new Personagem("Koboldo", 30, 12, 3);
const charFrancisco = new Personagem("Francisco", 40, 12, 5);

function combate(personagem1, personagem2) {
    chamada(personagem1, personagem2);
    iniciativa(personagem1, personagem2);
    declararVencedor(personagem1, personagem2);
}

function chamada(personagem1, personagem2){
    console.log(
    `
    -/-//-///-//-/-

    Nome: ${personagem1.nome}
    HP: ${personagem1.hp}
    Dano: 1d${personagem1.dano}

    VS

    Nome: ${personagem2.nome}
    HP: ${personagem2.hp}
    Dano: 1d${personagem2.dano}

    -/-//-///-//-/-`);
}

function rolagemDado(valorDado){
    return (parseInt(Math.random() * valorDado) + 1);
}

function iniciativa(personagem1, personagem2){

    const rolagemIniciativa1 = rolagemDado(personagem1.destreza);
    const rolagemIniciativa2 = rolagemDado(personagem2.destreza);

    if (rolagemIniciativa1 > rolagemIniciativa2){
        batalha(personagem1, personagem2);
    } else if (rolagemIniciativa1 < rolagemIniciativa2){
        batalha(personagem2, personagem1);
    } else {
        iniciativa(personagem1, personagem2);
    }

}

function batalha(personagem1, personagem2){
    
    for(let i = 0; personagem1.hp > 0 && personagem2.hp > 0 ; i++){
        ataque(personagem1, personagem2);
        if (personagem2.hp > 0){
            ataque(personagem2, personagem1);
        } else {
            break;
        }
    }

}

function ataque(atacante, defensor){
    
    dano = rolagemDado(atacante.dano);
    defensor.hp -= dano;
    return console.log(`
    ${atacante.nome} atacou ${defensor.nome}, causando ${dano} de dano \n    ${defensor.nome} HP = ${defensor.hp}`);

}

function declararVencedor(personagem1, personagem2){

    console.log("\n    -/-//-///-//-/-");
    if (personagem1.hp > personagem2.hp) {
        console.log(`\n    ${personagem1.nome} foi o vencedor! Sobreviveu com ${personagem1.hp} pontos de vida.`);
    } else if (personagem1.hp < personagem2.hp){
        console.log(`\n    ${personagem2.nome} foi o vencedor! Sobreviveu com ${personagem2.hp} pontos de vida.`);
    } else if (personagem1.hp == personagem2.hp){
        console.log("\n    WOW, tivemos um empate!");
    }
    console.log("\n    -/-//-///-//-/-");
    
}

combate(charKoboldo, charFrancisco);