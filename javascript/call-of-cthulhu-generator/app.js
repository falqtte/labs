const prompt = require("prompt-sync")();

class Investigator {
    constructor(player, character, age, stats, luck) {
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
            int: stats.int,
        }
        this.luck = luck;
    }
}

function roll(sizes){
    return Math.ceil(Math.random() * (sizes));
}

const firstQuestions = [
    "Qual o seu nome? ",
    "Qual o nome de seu investigador? ",
    "Qual a idade de seu investigador? "
];
const characteristicsNames = ["Força", "Destreza", "Poder", "Constituição", "Aparência", "Tamanho", "Educação", "Inteligência"]
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

const atributes = {
    FOR: characteristics[0] * 5,
    DES: characteristics[1] * 5,
    POD: characteristics[2] * 5,
    CON: characteristics[3] * 5,
    APA: characteristics[4] * 5,
    TAM: characteristics[5] * 5,
    EDU: characteristics[6] * 5,
    INT: characteristics[7] * 5,
    Sorte: characteristics[8] * 5,
}
console.log("")
console.log("Esses foram os reultados:")
console.table(atributes)
