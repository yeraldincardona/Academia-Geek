/*
var cap_inv , gan;
cap_inv = 150000;
gan = 0;

gan = cap_inv *0.02;

document.write("La ganancia es:" + gan);
*/
//condicional simple
/*
let numUno = 5;

simple(numUno);
function simple(num){
 if(num < 3){
     alert("El condicional es verdadero");
 }
 else{
     alert("el condicional es falso");
 }
}
*/

/*
let numUno = 10;
let numdos= 9;

simple(numUno, numdos);

function simple(num1,num2){
 if(num1 < num2){
     document.write("El condicional es verdadero");
 }
 else{
     document.write("el condicional es falso");
 }
}
*/

let numUno = 9;
let numdos= 9;

condicionalMultiple(numUno, numdos);

function condicionalMultiple(num1,num2){
 if(num1 > num2){
     document.write("El condicional es verdadero");
 }
 else if(num1 < num2){
     document.write("el condicional es falso");
 }
 else{
     document.write("son iguales");
 }
}



