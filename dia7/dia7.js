
console.log("--------------- EXERCICIOS -----------------------")
//let idade2 = 10  // apenas para comecar o  do/while
//do{
//    idade2 = Number(prompt("Insira uma idade2 :"))
//console.log( "A idade inserida foi de: " + idade2 + " anos")
//} while(idade2 >= 18);

//console.log(" Voce é menor de idade")


// let condicao = true;
//while (condicao){
//  let idade = Number(prompt("Insira uma idade: "))
     //if (idade < 18){
     // console.log("Voce inseriu uma idade menor que 18 anos")
   //   condicao = false;} }
  // console.log("  O WHILE ACABOU")



  console.log("============ EX 2 ================")
  condicione = true
  let nHomem = 0
  let nMulher = 0
  let somanota =0
  let n_alunos = 0
  let maior_nota_homem = -1 
  while(condicione){
  let nota_aluno = Number(prompt(" INSIRA SUA NOTA (0 A 10) :")) 
  let sexo_aluno = prompt(" Insira seu sexo : (MASC/FEM)")
  n_alunos = n_alunos + 1
  somanota = nota_aluno + somanota

  if (sexo_aluno === "MASC"){
    nHomem = nHomem + 1
  }
   if (sexo_aluno === "FEM" && nota_aluno >= 7 ){
     nMulher = nMulher + 1
   }
  if( sexo_aluno === "MASC" && maior_nota_homem < nota_aluno ){
  maior_nota_homem = nota_aluno
  }
  let cadastro = prompt("Quer cadastrar mais algum aluno? (S/N)")
  if (cadastro === "N"){
    condicione = false}
  if (cadastro === "S")
  { condicione = true } 
  
}

console.log(" O numero de mulheres que tiraram nota maior que sete foi de : " + nMulher)
console.log( nHomem +" homens se cadastraram ")
let media = somanota/n_alunos
console.log(" A media geral dos alunos foi de: " + media)
console.log(" E a maior nota registrada por um homem é de: "+ maior_nota_homem)



console.log("============EX 3 =============")
 condicao = true
let saldo_total = 0 
let vezes_valor = 0
let qtd_valor =0
let maior_valor=0
do{
let nome_cliente = prompt("Insira seu nome: ")
let cpf = prompt( "Qual seu cpf? (xxx.xxx.xxx-xx)")
let valor = Number(prompt("Insira um valor"))
let opcao_bancaria = prompt("Digite S para Sacar e D para Depositar")
vezes_valor = vezes_valor + valor
qtd_valor = qtd_valor + 1
if (opcao_bancaria === "S" && saldo_total >= valor) {
    saldo_total = saldo_total - valor
}
 else if(opcao_bancaria === "S" && saldo_total < valor){
    console.log("Voce nao tem saldo suficiente em sua conta, favor faca um deposito")
}
if(opcao_bancaria === "D"){
    saldo_total = saldo_total +  valor
}
if( valor> maior_valor){
    maior_valor = valor
}
let repetir = Number(prompt("Digite 1 para continuar ou 2 para parar"))
if(repetir === 1){
 condicao = true
}
 else if(repetir === 2){
  condicao = false
 }
}while(condicao)

console.log(" O saldo na conta é de R$" + saldo_total)
console.log("A media dos valores é de:"+ vezes_valor / qtd_valor )
console.log("O maior valor inserido para sacar ou depositar foi de: " + maior_valor)