/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/


function mostrar() //inicializa la funcion
{
	let nombreIngresado; //inicio la variable 

	nombreIngresado=document.getElementById("txtIdNombre"). value;//copio lo ingresado a la caja de texto

	alert("Hola " + nombreIngresado);//imprimo msj 
	
	document.getElementById("txtIdNombre").value="";//dejo en blanco la caja de texto
}
