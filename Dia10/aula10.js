let array_comidas= [];
let indice_array = 0;
let continuar = true;
while(continuar === true ){ 
  let array_elementos = prompt("Insira uma comida de sua preferencia: ");
 array_comidas[indice_array] = array_elementos
 let deseja_continuar = prompt(" Caso queira adicionar mais comidas digite 1");
if(deseja_continuar !== '1'){
  continuar = false
  continue
}
 indice_array++;}

 let numero_elemento = Number(prompt("Qual indice da array voce gostaria que fosse exibido? "));
 console.log( array_comidas[ numero_elemento]);