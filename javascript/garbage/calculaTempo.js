const diaHoje = 28;
const mesHoje = 7;
const anoHoje = 2022;

const diaPassado = 23;
const mesPassado = 10;
const anoPassado = 2004;

let diferencaDeAnos = anoHoje - anoPassado;
let diferencaMeses = (12 - mesPassado) + mesHoje;
let diferecaDeDias = diaHoje - diaPassado;

if(diferencaMeses > 12) {
    diferencaMeses-= 12;
} else{
    diferencaDeAnos--;
}

if (diferecaDeDias < 0){
    diferecaDeDias = diaHoje;
}

console.log(`Passaram ${diferencaDeAnos} anos, ${diferencaMeses} meses e ${diferecaDeDias} dias`)

function modulo(numero){
    return Math.pow(numero * numero , 0.5);
}
