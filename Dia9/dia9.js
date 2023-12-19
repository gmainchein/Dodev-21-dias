

do{
let nome = prompt("Insira seu nome: ")
let idade = Number(prompt("Insira sua idade: "))
let peso = Number(prompt("Insira seu peso(Kg) : "))
let altura =  Number(prompt("Insira sua altura(m) : "))
let profissao = prompt("Insira sua profissao: ")
console.log("Olá ", nome ," voce tem ", idade, " anos e pesa ", peso , " kg e sua altura é: ", altura, " metros e voce trabalha com ", profissao)
if (idade < 18 ){
    console.log("nao pode beber ainda")
}
if( idade >= 18){
    console.log("ja pode beber")
}
let idademeses = idade * 12
let idadesemanas = idademeses * 4
let idadedias = idadesemanas * 7

console.log( nome , "a sua idade em meses:", idademeses , " em semanas: ", idadesemanas , " e a sua idade em dias: " , idadedias )
let imc = (peso / (altura * altura)).toFixed(1)
if( imc < 18.5 ){
 console.log( " seu imc é de: ", imc , " e isso representa magreza")}
 else if( imc >= 18.5 && imc <= 24.9 ){
  console.log(" seu imc é de: ", imc , " e isso é o imc ideal")}
  else if(imc > 24.9 && imc <= 30.0 ){
   console.log(" seu imc é de: ", imc , " e isso representa sobrepeso")}
   else if(imc > 30.0){
    console.log(" seu imc é de: ", imc , " e isso representa obesidade")}

let ano_nascimento = 2023 - idade
for(contador= 0; contador<= idade; contador++){
    console.log(ano_nascimento , " - ", contador , " anos de idade ")
    ano_nascimento = ano_nascimento + 1
}
 finalizar = prompt("Voce deseja inserir novos dados? [S/N]")
}while(finalizar === "S")

