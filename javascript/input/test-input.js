const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let nome;

function teste(name){
    nome = name;
    console.log("De dentro da função:", name)
}

readline.question(`What's your name? `, name => {
    readline.close();
    teste(name)
    console.log(nome);
});
