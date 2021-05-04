  
//EJERCICIO 1 
    var nombre = ["D","A","N",7,"E","S","O","L","L","I","N","I"];
    function btn1(){
        console.log("Ejercicio 1");
        for (var i = 0; i < nombre.length; i++){            
                console.log(nombre[i]);           
            }
    }
//ejercicio 2   
    function btn2(){
        console.log("Ejercicio 2. Partimos del nombre Dan7e Sollini");
        nombre.forEach(function (letra){
            if(typeof letra == "number"){
            console.log("Los nombres de persona no suelen contener el NÚMERO:" + " "  + letra);
            }else if(letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"){
            console.log("el nombre contiene la VOCAL:" + " " + letra);
            }else{
            console.log("el nombre contiene la CONSONANTE" + " " + letra);
            }
        })
    }

//EJERCICIO 3
    /*declare el array nombre1[] con el mismo contenido porque al añadir una funcion para cada boton,
    el resultado de la funcion bnt3() me acumulaba las letras contando el numero de veces en las que se utilizaba 
    el array nombre[] para los otros ejercicios.
    por lo que usando un nuevo array nombre1[] con el mismo contenido solo para este ejercicio me solucionaba esto
    aun asi cada vez que se ejecuta la funcion btn3() se acumula el resultado*/
    var nombre1 = ["D","A","N",7,"E","S","O","L","L","I","N","I"];
    var letras = {};    
    function btn3(){    
        nombre1.map(function(i){
            letras[i] = (letras[i] || 0) + 1;
        })
        console.log("Ejercicio 3");
        console.log(letras);
    }
    
//EJERCICIO 4   
    var nombreCompleto = [];
    var nombre2 = ["D","A","N","T","E"," "];
    var apellido = ["S","O","L","L","I","N","I"];

    function btn4(){ 
        var nombreCompleto =  [...nombre2,...apellido];    
        console.log("Ejercicio 4");
        console.log(nombreCompleto);
    }
//manera alternativa usando .concat() 
        var nombreCompleto2 = nombre2.concat(apellido);
       // console.log(nombreCompleto2);
    
//NIVEL 2 ENCONTRAR CORREOS
    function btn5(){
        var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 
        var correos = str.match(/([\da-zñ_\.\+-]+)@([\da-zñ_\.\+-]+)\.([\da-z\.]+)/ig);
        console.log("ejercicio correos")
        console.log(correos);
    }

//BOTON RESET
    function btn6(){
        console.clear();
    }