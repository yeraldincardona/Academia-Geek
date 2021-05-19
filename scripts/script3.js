var cantidad = 0;
var salario = 0;
var extra = 0;

function Calcular(){
    cantidad= document.getElementById("cantidad").value;
    if (cantidad >=1 && cantidad <=40){
        salario = cantidad * 16000;
        document.getElementById("salarioSemanal").value =salario;
        document.getElementById("salarioextra").value =salari = extra;
        document.getElementById("totalpagar").value =salario;
       
    }
    else{
        extra= cantidad - 40;
        salario = (extra*20000)+(40*16000);
        document.getElementById("salarioSemanal").value = 40*16000;
        document.getElementById("salarioextra").value = extra * 20000;
        document.getElementById("totalpagar").value = salario;
    }
}
