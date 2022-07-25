import { Investigator } from "./Investigator.js";

const prompt = require('prompt-sync')();

const primeirasPerguntas = [
    "Qual o seu nome? ",
    "Qual o nome de seu investigador? ",
    "Qual a idade de seu investigador? "

];
const respostas = [];
console.clear();
console.log("Olá, seja bem-vindo a criação guiada de personagem de Call of Cthulhu");
console.log("Vamos começar com algumas coisas básicas...");
console.log("");
primeirasPerguntas.forEach( (element, index) => {
    respostas[index] = prompt(element);
});
