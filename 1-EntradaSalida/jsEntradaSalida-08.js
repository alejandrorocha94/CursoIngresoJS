/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
/*
Alumno: Rocha Alejandro 
Division: J
Ejercicio 08
*/
function SacarResto()
{
	let dividendo; //variable numero	1
	let divisor; // variable numero 2
	let resto; // variable resultado

	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value); // convierto un string a un int con el parseint

	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	

	resto = dividendo % divisor; // realizo la operacion matematica

	alert("La resto es " + resto); //imprimo el resultado de la operacion
}

