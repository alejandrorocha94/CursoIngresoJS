/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre ;//guardo espacio de memoria en la variable nombre

	nombre = prompt("ingrese su nombre");//guardo el dato en mi variable nombre 

	document.getElementById("txtIdNombre").value =nombre;//copio lo que tengo guardado y lo muestro en mi caja de texto

}

