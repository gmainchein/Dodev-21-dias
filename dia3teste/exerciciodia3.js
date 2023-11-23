console.log("============ CONST =========")
console.log( a)
const b = " const b = A segunda letra do alfabeto"
console.log( b ) 

console.log("========== LET =========")

let meuSobrenome = "Mainchein"
console.log( "nomeando a variavel let obtemos: " + meuSobrenome);
let meuSobrenome2 = "Silva"
console.log( "dando outro valor a váriavel let obtemos: " + meuSobrenome2);

console.log("========== PROMPT ======")
let fprompt = parseInt(prompt("INSIRA UM NUMERO DECIMAL"))
console.log("usando o parseInt temos: " +fprompt);
let sprompt = Number(prompt("INSIRA O MESMO NUMERO DECIMAL"))
console.log( "usando a expressao 'number' temos : "+ sprompt);


console.log("========== EXERCICIO DIA 3 ========")
let peso = Number(prompt("INSIRA SEU PESO: (KG) "))
let idade = Number(prompt("INSIRA SUA IDADE: "))
let nome = prompt("INSIRA SEU NOME: ") 
let altura = Number(prompt("INSIRA SUA ALTURA (m): "))

let imc = peso / ( altura * altura)
let anoaniv = 2023 - idade
console.log("Olá, "+ nome + " ,voce tem "+ idade +" anos e nasceu em "+ anoaniv + " e a sua altura é " + altura+ ", pesa "+ peso + " kg, e seu imc é de : " + imc+ " Kg/m2" )