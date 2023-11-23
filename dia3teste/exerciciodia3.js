console.log("========== EXERCICIO DIA 3 ========")
let peso = Number(prompt("INSIRA SEU PESO: (KG) "))
let idade = Number(prompt("INSIRA SUA IDADE: "))
let nome = prompt("INSIRA SEU NOME: ") 
let altura = Number(prompt("INSIRA SUA ALTURA (m): "))

let imc = peso / ( altura * altura)
let anoaniv = 2023 - idade
console.log("Olá, "+ nome + " ,voce tem "+ idade +" anos e nasceu em "+ anoaniv + " e a sua altura é " + altura+ ", pesa "+ peso + " kg, e seu imc é de : " + imc+ " Kg/m2" )