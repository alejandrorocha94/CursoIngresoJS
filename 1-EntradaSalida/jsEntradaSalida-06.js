/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
/*
Alumno: Rocha Alejandro 
Division: J
Ejercicio 06
*/
function sumar()
{
	let num1; //variable numero	1
	let num2; // variable numero 2
	let resultado; // variable resultado

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value); // convierto un string a un int, porque la caja de texto toma str

	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	

	resultado = num1 + num2; // hago la suma de mis dos variables 

	alert("La suma es " + resultado); // imprimo por pantalla el resultado
}

