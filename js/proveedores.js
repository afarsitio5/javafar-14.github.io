function provee(){
    var clave = document.getElementById('clave').value;
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var fecha = document.getElementById('fecha').value;

    resultado = document.getElementById('resultadoC').innerHTML = clave;
    resN = document.getElementById('resultadoN').innerHTML=nombre;
    resT = document.getElementById('resultadoT').innerHTML=telefono;
    resF = document.getElementById('resultadoF').innerHTML=fecha;
} 
