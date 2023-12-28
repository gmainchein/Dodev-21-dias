let ArrayOriginal = [];
let ContarAte = Number(prompt("Você quer adicionar quantos valores na array? "));

// Populating the original array
for (let IndiceArray = 0; IndiceArray < ContarAte; IndiceArray++) {
  let PromptValorArray = Number(prompt("Digite o " + (IndiceArray + 1) + "° valor: "));
  ArrayOriginal[IndiceArray] = PromptValorArray;
}

console.log("Array original: ", ArrayOriginal);

// INVERTENDO ARRAY 
let IndiceArrayInverso = 0;
let ArrayInversa = [];

while (IndiceArrayInverso < ContarAte) {
    ArrayInversa[IndiceArrayInverso] = ArrayOriginal[ContarAte - 1 - IndiceArrayInverso];
    IndiceArrayInverso++;
}
// CONSIDERE ContarAte = 3
// LOOPING = ARRAYINVERSA [ indice 0] = ARRAYOG = [indice2] =  [ 3 - 1 - indice0 ] 
// [ContarAte - 1 - IndiceArrayInverso] = [ 3 - 1 - 0 ]= 2  entao o INDICE2 da array original seria igual o Indice0 da Array inversa
console.log("Array inversa: ", ArrayInversa);


// Exercici0 5 DESAFIO

let prompt_numero2 = Number(prompt("Insira um numero inteiro positivo"));
let ArrayFibonacci = [];
ArrayFibonacci[0] = prompt_numero2 - 1 ;
ArrayFibonacci[1] = prompt_numero2 ;

for(i = 2; i < 10; i++){
ArrayFibonacci[i] = ArrayFibonacci[i - 1] + ArrayFibonacci[ i - 2];
}
console.log(ArrayFibonacci)