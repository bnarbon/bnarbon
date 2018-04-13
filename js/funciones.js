var empleados = [
        {nombre: "Marta", salario: 1000, horas: 50},
        {nombre: "Javier", salario: 3500, horas: 100},
        {nombre: "Pepe", salario: 800, horas: 100},
        {nombre: "Sandra", salario: 950, horas: 95},
        {nombre: "Teresa", salario: 2700, horas: 90}];


var dataSet = [
    ["Alberto",3500,100],
    ["Adrian",350,300],
    ["Maria",300,20],
    ["Borja",3000,50],
    ["Antonio",200,10],
];
$(document).ready(function() {
    $('#tablaVacia').DataTable( {
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Sueldo" },
            { title: "Horas" }
        ],
         "language": {
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Ultimo",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
    } );
} );
    


function mensaje(){  /* En los parentesis podemos añadir variables para pasarlas de uno sitio a otro*/
    
    alert("Holaaa"); /* mediante el alert abrimos una ventana que indica el texto que llevo dentro*/
     /*var lista=document.querySelectorAll("#principal p"); /*nos creamos una liesta con todos los parrafos que esten dentro de la id principal y lo metemos dentro del array*/
}


function muestraTexto(){
    
    var elem = document.getElementById("parrafo1");  /*mediante el var creamos una variable*/
    elem.innerHTML = "Texto cambiado <strong>con negrita</strong>"; /* cogemos el parrafo y metemos lo siguiente en HTML*/
}

function concatenaNombre(){
    
    var nombre = document.getElementById("nombre").innerHTML;/* al poner el innerHTML cogemos el texto de la id*/
    var apellidos = document.getElementById("apellidos").innerHTML;
    
    document.getElementById("nombreCompleto").innerHTML = nombre + " " + apellidos; /* con esto concatenamos la variable nombre y apellidos en una unica*/
}

function operacionSuma(){
    
    var variable1 = document.getElementById("num1").value;/*con value cogemos el valor en vez de texto*/
    var variable2 = document.getElementById("num2").value;
    
    document.getElementById("resultado").innerHTML = parseFloat(variable1) + parseFloat(variable2); /* con la funcion parseFloat pasamo un text a numero para hacer operaciones*/
}

function operacionResta(){
    
    var variable1 = document.getElementById("num1").value;
    var variable2 = document.getElementById("num2").value;
    
    document.getElementById("resultado").innerHTML = parseFloat(variable1) - parseFloat(variable2); /* con el return devolvemos lo que lleve detras, si no ponemos nada en el return no devuelve nada*/
} 

function operacionMultiplicacion(){
    
    var variable1 = document.getElementById("num1").value;/*con value cogemos el valor en vez de texto*/
    var variable2 = document.getElementById("num2").value;
    
    document.getElementById("resultado").innerHTML = parseFloat(variable1) * parseFloat(variable2); /* con la funcion parseFloat pasamo un text a numero para hacer operaciones*/
}

function operacionDivision(){
    
    var variable1 = document.getElementById("num1").value;/*con value cogemos el valor en vez de texto*/
    var variable2 = document.getElementById("num2").value;
    
    document.getElementById("resultado").innerHTML = Math.trunc(parseFloat(variable1) / parseFloat(variable2)); /* con la funcion parseFloat pasamo un text a numero para hacer operaciones*/
    document.getElementById("resto").innerHTML = "Resto: " + parseFloat(variable1) % parseFloat(variable2);
}

function operacionExponencial(){
    
    var variable1 = document.getElementById("num1").value;/*con value cogemos el valor en vez de texto*/
    var variable2 = document.getElementById("num2").value;
    
    document.getElementById("resultado").innerHTML = Math.pow(parseFloat(variable1),parseFloat(variable2)); /* con Math.pow hacemos la exponencial*/
}

function operacionParImpar(){
    
    var variable1 = document.getElementById("num1").value;
    var variable2 = document.getElementById("num2").value;
    
    if(variable1 % 2 == 0){
        document.getElementById("parImpar1").innerHTML = "Variable 1 es par."
    }
    else{
        document.getElementById("parImpar1").innerHTML = "Variable 1 es impar."
    }
    if(variable2 % 2 == 0){
        document.getElementById("parImpar2").innerHTML = "Variable 1 es par."
    }
    else{
        document.getElementById("parImpar2").innerHTML = "Variable 1 es impar."
    }
    
}

function muestraCoches(){
    
    var coches = ["Renault","Peugeot","Citroen","Ford"];
    var texto = "<ul>";
    
    for(i=0 ; i<coches.length ; i++){
        texto+= "<li>" + coches[i] + "</li>";
    }
    texto+= "</ul>";
    
    document.getElementById("listadoCoches").innerHTML = texto;
    document.getElementById("listadoCochesRapido").innerHTML = coches.join(" , "); /*muestra el array entero con comas entre medias*/
}

function compararPeso(){
    
    var peso = ["80","100","73","67","93","89","81"];
    var contador = 0;
        
    for(i=0 ; i<peso.length ; i++){
        if(peso[i]>80){
            contador++;
        }
    }
    
    document.getElementById("gente").innerHTML = "Hay " + contador + " personas con mas de 80 kg";
}

function ponerNota(){
    
    var notas = ["3","8","7","5","4.5","9","8","7","3.5","6","10","7","7.5"];
    var suspenso = 0;
    var apto = 0;
    var bien = 0;
    var notable = 0;
    var sobresaliente = 0;
    var matricula = 0;    
    
    for(i=0 ; i<notas.length ; i++){
        if(notas[i]<5){
            
            suspenso++;
        }
        if(notas[i]>=5 && notas[i]<6){
            
            apto++;               
        }
        if(notas[i]>=6 && notas[i]<7){
         
            bien++;   
        }
        if(notas[i]>=7 && notas[i]<8.5){
            
            notable++;
        }
        if(notas[i]>=8.5 && notas[i]<10){
            
            sobresaliente++;
        }
        if(notas[i]==10){
            
            matricula++;
        }
    }
    
    document.getElementById("alumnoSuspenso").innerHTML = "Suspenso: "+suspenso;
    document.getElementById("alumnoApto").innerHTML = "Apto: "+apto;
    document.getElementById("alumnoBien").innerHTML = "Bien: "+bien;
    document.getElementById("alumnoNotable").innerHTML = "Notable: "+notable;
    document.getElementById("alumnoSobresaliente").innerHTML = "Sobresaliente: "+sobresaliente;
    document.getElementById("alumnoMatricula").innerHTML = "Matricula: "+matricula;
    
}

function menosCobra(){
    
    var a = empleados[0].salario;
    var nombre = 0;
    
    for(i=0 ; i<empleados.length ; i++){
        if(a<empleados[i].salario){
            a = a;
        }else {
            a = empleados[i].salario;
            nombre = empleados[i].nombre;
        }
    }
    
    document.getElementById("salarioMinimo").innerHTML = nombre + " tiene el salario mas bajo que es de: " + a ;
}

function masTrabaja(){
    
    var a = empleados[0].horas;
    var nombre = 0;
    
    for(i=0 ; i<empleados.length ; i++){
        if(a>empleados[i].horas){
            a = a;
        }else {
            a = empleados[i].horas;
            nombre = empleados[i].nombre;
        }
    }
    
    document.getElementById("empleadoMasTrabaja").innerHTML = "El empleado que mas trabaja es " + nombre + " con " + a + " horas.";
}

function sueldoMedio(){
    
    var media = 0;
    var total = 0;
    
    for(i=0 ; i<empleados.length ; i++){
        total += empleados[i].salario;
    }
    
    media = total / empleados.length;
    document.getElementById("mediaSueldo").innerHTML = "El salario medio es de: " + media;
}

//function mostrarInformacion