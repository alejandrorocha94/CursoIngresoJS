/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() //inicializa la funcion
{
	var nombreIngresado; //inicio la variable 
	nombreIngresado=document.getElementById("txtIdNombre"). value;//copio lo ingresado a la caja de texto
	//nombreIngresado=txtIdNombre.value;
	alert("Hola " + nombreIngresado);//imprimo msj 
	document.getElementById("txtIdNombre").value="";//dejo en blanco la caja de texto
}


