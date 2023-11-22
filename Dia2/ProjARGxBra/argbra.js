console.log("JOGO ARG x BRA  PALPITES:")
 var braG = parseFloat(parseInt(prompt("QUANTOS GOLS BRASIL IRA FAZER?")))
 var argG = parseFloat(parseInt(prompt("QUANTOS GOLS ARG IRA FAZER?")))
  var saldog = argG - braG
    var gols = "GOLS"
    if (gols % 2 !== 0){
        gols = "GOL"
    }

  if ( argG < braG){
    saldog = braG - argG ;
    console.log("BRASIL GANHOL A PARTIDA POR UMA VANTAGEM DE : ", saldog , gols) 
}
 else if(argG > braG){
    console.log("A ARGENTINA GANHOU A PARTIDA POR UMA VANTAGEM DE:", saldog , gols)
 }
 else if( saldog = 0){
    console.log("O JOGO TERMINOU EM UM DURO EMPATE")
 }
 
 
 
 console.log("O SALDO DE GOLS FOI DE : ", saldog , " GOLS")