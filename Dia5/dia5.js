console.log("-----------------------------EXERCICIO 1 DIA 5 -------------------------")
let valor1 = Number(prompt("INSIRA UM NUMERO "))
let valor2 =  Number(prompt("INSIRA OUTRO NUMERO "))
let operacao = Number(prompt("INSIRA 1 PARA ADICAO OU 2 PARA SUBTRACAO"))
switch(operacao){
    case 1:
        console.log( "OS NUMEROS ESCOLHIDOS FORAM: " , valor1 , " E ",valor2 , " LOGO, O VALOR DA SUA SOMA É DE: ", valor1 + valor2 )
    break;
     case 2:
        console.log( "OS NUMEROS ESCOLHIDOS FORAM: " , valor1 , " E ",valor2 , " LOGO, O VALOR DA SUA SUBTRACAO É DE : ", valor1 - valor2)    
     break;
     default:
         console.log("OPCAO INVALIDA TENTE NOVAMENTE")
     break;    
}



console.log("-----------------------------EXERCICIO 2 DIA 5 -------------------------")

let posto = prompt("VOCE GOSTARIA DE ABASTECER O CARRO COM ALCOOL , GASOLINA OU APENAS CALIBRAR OS PNEUS? ")

switch(posto){
    case "gasolina":
        let vgasolina = Number(prompt("qual o valor para abastecer?"))
        let litrogasolina = parseInt(vgasolina/ 5)
        console.log("VOCE ABASTECEU : ", litrogasolina , " LITROS POR UM VALOR DE:", vgasolina ,)
        break;
    case "alcool":
        let valcool = Number(prompt("qual o valor a ser abastecido?"))
        let litroalcool = parseInt(valcool/3)
        console.log("VOCE ABASTECEU : ", litroalcool , " LITROS POR UM VALOR DE:", valcool ,)
    break;

    case "calibrar":
        console.log("PNEUS CALIBRADOS COM SUCESSO")
    break;
    default:
       console.log("OPCAO INVALIDA")
    break;
}
