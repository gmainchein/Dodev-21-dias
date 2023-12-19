
do{
 let nome = prompt("Digite seu nome? ")
 let idade = Number(prompt("Digite sua idade: "))
 let salario = Number(prompt("Digite o seu salário atual: "))
 console.log(" -----------FICHA DA EMPRESA-------")
console.log(" NOME --------------------- ", nome )
console.log(" IDADE -------------------- ", idade)
console.log(" SALARIO ------------------ ", salario)

console.log("--------- REAJUSTES SALARIAIS ANUALMENTE -----------")

let aumento_anual = salario * 0.015
let salario_apos_aumento = salario + aumento_anual
    
for(contador = 1; contador <= 10 ; contador = contador + 1 ){
    console.log( contador , "O ANO DE EMPRESA --------- ", salario_apos_aumento)
    aumento_anual = aumento_anual * 2 
 salario_apos_aumento = salario + aumento_anual
}

inf_errada = prompt("Voce digitou alguma informacao errada? [S/N]")
}
while(inf_errada === "S")

