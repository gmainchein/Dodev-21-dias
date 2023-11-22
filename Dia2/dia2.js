
var rep = true;
console.log("Olá mundo mto massa")
var rep = true;

while(rep == true){

    var videogame = prompt("QUAL SEU VIDEOGAME FAVORITO? [PS / XBOX]").toUpperCase();

    if (videogame == "PS") {

        console.log("UAU VOCE PREFERE OS EXCLUSIVOS AO INVES DE HARDWARE");
        rep = false;

    }

    else if (videogame == "XBOX") {

        console.log("AH ENTAO VOCE PREFERE HARDWERE E BONS SERVICOS AO INVES DE EXCLUSIVOS DE PESO");
        rep = false;

    }

    else {

        console.log("Infelizmente a opcao escolhida nao esta sendo levada em conta tente responder novamente")

    }
}
