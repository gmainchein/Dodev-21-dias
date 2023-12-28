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

 // EXERCICIOS:

let array_exercicio2 = [];

for(qtd_valor_array= 0 ;qtd_valor_array < 2; qtd_valor_array++){
  let array_positiva = Number(prompt("Insira um numero inteiro positivo:"));
  array_exercicio2[qtd_valor_array] = array_positiva;
}
console.log( array_exercicio2)


// EXERCICIO 3 

let array5_num = [];
let prompt_numero = 1
for(contador_a5num =0 ;contador_a5num < 5; contador_a5num++){
  let valorarray_ex3 = Number(prompt("Digite o "+ prompt_numero + "o número: " ))
  array5_num[contador_a5num] = valorarray_ex3;
  prompt_numero = prompt_numero + 1
}
console.log( "Array original: ", array5_num)

let cont_array_reverso = 4;
let array5_num_reversa = [];
for(contador_a5num =0 ;contador_a5num < 5; contador_a5num++){
  array5_num_reversa[contador_a5num] = array5_num[cont_array_reverso];
 cont_array_reverso = cont_array_reverso - 1 ;
}
console.log(" Array reverso: ", array5_num_reversa)
