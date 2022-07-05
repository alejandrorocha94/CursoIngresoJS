/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*
Alumno: Rocha Alejandro 
Division: J
Ejercicio 10
*/
function mostrarAumento()
{
	
	let imp; //variable importe
	let impfinal; // variable importe final
	let descuento;//variable descuento
	imp=parseFloat(document.getElementById("txtIdImporte").value);
	descuento= imp * 25/100; // realizo el descuento
	impfinal= imp - descuento; // realizo la operacion para aplicar al importe
	document.getElementById("txtIdResultado").value=impfinal;
	//pego mi nuevo importe con descuento a la caja de texto de resultado
}
