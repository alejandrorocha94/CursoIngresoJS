/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*
Alumno: Rocha Alejandro 
Division: J
Ejercicio 09
*/
function mostrarAumento()
{
	let sueldo; //variable sueldo
	let nuevosueldo; // variable nuevosueldo
	let aumento;//variable aumento
	sueldo=parseFloat(document.getElementById("txtIdSueldo").value);
	aumento= sueldo * 10/100; // realizo el aumento
	nuevosueldo= sueldo + aumento; // realizo la operacion para aplicar al sueldo
	document.getElementById("txtIdResultado").value=nuevosueldo;
	//pego mi nuevo sueldo con aumento a la caja de texto de resultado
}

