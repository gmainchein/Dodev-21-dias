console.log("----------------------exercicio 1 dia 4-----------------------------")

let dinheiro = prompt("Voce tem dinheiro? ")
let fome = prompt(" Voce está com fome? ")
let restaurante = prompt(" O restaurante está aberto? ")

if (fome === "nao" || dinheiro === "nao"){
    console.log(" A janta será em casa! ")
}
 if ( fome === "sim" && dinheiro === "sim" && restaurante === "fechado"){
    console.log("Peca um delivery! ")
 }
    if( fome === "sim" && dinheiro === "sim" && restaurante === "aberto"){
        console.log("Hoje o jantar será no seu restaurante favorito! ")
    }


    console.log(" ---------------- EXERCICIO 2 DIA 4 --------------------------")
    let nome =     prompt(" Qual seu nome? ")
    let idade =    prompt(" Qual sua idade? ")
    let carteira = prompt(" Voce possui habilitacao? ")
     let carro =   prompt(" Voce tem um carro? ")

     if( idade < 18 || carteira === "nao"){
          console.log(  nome ," ,voce é menor de idade e nao pode dirigir!")
     }
     if ( idade >= 18 && carteira === "sim" && carro === "nao"){
          console.log(nome , " ,voce é maior de idade, pode dirigir porem nao tem um carro :( ")
     }
     if (idade >= 18 && carteira === "sim" && carro === "sim"){
        console.log(nome , " voce sera o motorista!")
     }