const prompt = require("prompt-sync")();

class Investigator {
    constructor(player, character, age, stats) {
        this.player = player;
        this.character = character;
        this.age = age;
        this.characteristics = {
            str: stats.str,
            dex: stats.dex,
            pow: stats.pow,
            con: stats.con,
            app: stats.app,
            edu: stats.edu,
            siz: stats.siz,
            int: stats.int
        }
        this.luck = Number(stats.luck);
        this.hp = Math.ceil((this.characteristics.siz + this.characteristics.con) / 10);
        this.mp = this.characteristics.pow / 5;
        this.sanity = this.characteristics.pow;
        this.moveRate = defineMoveRate(this.age, this.characteristics)
        this.combat = defineCombatStats(this.characteristics.str, this.characteristics.siz)
    }
}

function defineCombatStats(str, siz){
    const x = str + siz;

    if(x >=   2 && x <=  64) return {extra: -2, build: -2} 
    if(x >=  65 && x <=  84) return {extra: -2, build: -1} 
    if(x >=  85 && x <= 124) return {extra: 0, build: 0} 
    if(x >= 125 && x <= 164) return {extra: "+1d4", build: 1} 
    if(x >= 165)  return {extra: "+1d6", build: 2} 
}

function defineMoveRate(age, c) {
    if(c.siz < c.dex && c.siz < c.str)   return (9 + verifyAge(age)); 
    if(c.siz <= c.dex || c.siz <= c.str) return (8 + verifyAge(age));
    if(c.siz > c.dex && c.siz > c.str)   return (7 + verifyAge(age));    
}

function verifyAge(age) {
    if(age >= 40 && age < 50) return -1
    if(age >= 50 && age < 60) return -2
    if(age >= 60 && age < 70) return -3;
    if(age >= 70 && age < 80) return -4;
    if(age >= 80) return -5;
    return 0;
}

function roll(sizes){
    return Math.ceil(Math.random() * (sizes));
}

const firstQuestions = [
    "Qual o seu nome? ",
    "Qual o nome de seu investigador? ",
    "Qual a idade de seu investigador? "
];
const characteristicsNames = ["Força", "Destreza", "Poder", "Constituição", "Aparência", "Tamanho", "Educação", "Inteligência", "Sorte"]
const answers = [];
const characteristics = [];

console.clear();
console.log("Olá, seja bem-vindo a criação guiada de personagem de Call of Cthulhu");
console.log("Vamos começar com algumas coisas básicas...");
console.log("");

firstQuestions.forEach( (element, index) => {
    answers[index] = prompt(element);
});

console.log("")
console.log(`Muito bem, ${answers[0]}, agora vamos até as Características de seu Investigador`)
console.log("Você prefere rodar os dados de forma manual ou que eu aleatorize tudo?")
console.log("")
console.log(`Escreva "manual", sem as aspas, para fazer a entrada dos valores. Qualquer outra resposta significa que os números serão aleatorizados de forma interna `)
const manual = prompt("> ");
console.log("")

if(manual === "manual") {
    console.log("Ok! A entrada dos valores será manual.")
    console.log("Para as primeiras características, rode 3 dados de 6 lados (3d6) para cada uma")
    console.log("Não é necessário nenhuma multiplicação, apenas os valores dos dados, o que significa que os valores devem estar entre 3 e 18");
    console.log("")
    characteristicsNames.forEach((element, index) => {
        if(index == 5) {
            console.log("")
            console.log("Para as próximas características serão rodados 2d6 + 6, ou seja, o valor do dado somado a 6")
            console.log("")
        }
        characteristics[index] = prompt(`Insira o valor de ${element}: `)
    })
    console.log("")
    characteristics[8] = prompt("Por fim, 3d6 para calcular a sorte: ")
} else {
    characteristicsNames.forEach((e, i) => {
        if(i >= 5 && i<=7) {
            characteristics[i] = roll(6) + roll(6) + 6
        } else {
            characteristics[i] = roll(6) + roll(6) + roll(6)
        }
    })
}

const objectCharacteristics = {
    str: Number(characteristics[0]) * 5,
    dex: Number(characteristics[1]) * 5,
    pow: Number(characteristics[2]) * 5,
    con: Number(characteristics[3]) * 5,
    app: Number(characteristics[4]) * 5,
    edu: Number(characteristics[5]) * 5,
    siz: Number(characteristics[6]) * 5,
    int: Number(characteristics[7]) * 5,
    luck: Number(characteristics[8]) * 5
}

console.clear()
const inv = new Investigator(answers[0], answers[1], answers[2], objectCharacteristics)

console.log(`
Nome: ${inv.character}
Jogador: ${inv.player}
Idade: ${inv.age}

Características / Atributos
FOR: ${inv.characteristics.str}      DES: ${inv.characteristics.dex}
POD: ${inv.characteristics.pow}      CON: ${inv.characteristics.con}
APA: ${inv.characteristics.app}      TAM: ${inv.characteristics.siz}
EDU: ${inv.characteristics.edu}      INT: ${inv.characteristics.int}
Sorte: ${inv.luck}

Estatísticas
Pontos de Vida: ${inv.hp}
Pontos de Sanidade: ${inv.sanity}
Pontos de Magia: ${inv.mp}

Informações de combate
Taxa de movimento: ${inv.moveRate}
Corpo: ${inv.combat.build}
Dano extra: ${inv.combat.extra}
`)