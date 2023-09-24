'use strict';
pi = 3.1416;

console.log(pi);


//EJEMPLO USANDO EL MODO ESTRICTO EN UNA FUNCION
//Si realizas el siguiente codigo que retornas una variable no declarada, no va a ocurrir un error y el programa se va a ejecutar con normalidad.

function myFunction() {
    return pi = 3.14;
}

console.log(myFunction());

//En modo estricto no permitirá realizar esto y provocará un error ,porque estará leyendo más detalladamente si el código está más limpio.

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());

// ReferenceError: pi is not defined