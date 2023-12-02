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