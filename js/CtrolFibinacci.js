"use strict";
function operacion(){
	var numeroBase = document.getElementById('base').value;
	var arreglo = [];
	numeroBase = parseInt(numeroBase);
	for (var x = 0; x<numeroBase; x++){
		if(x==0){
			arreglo.push(0);
		}
		else if(x==1){
			arreglo.push(1);
		}
		else{
			arreglo.push(arreglo[x-1]+arreglo[x-2]);
		}
	}
	document.getElementById("resultado").innerHTML =arreglo;
}
