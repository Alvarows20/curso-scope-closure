
var firstName; //undefined
firstName = "Alvaro"; //asignar valor
console.log(firstName);

var lastName = "Prado";//declarar / asignar
lastName = "Tenorio"; //reasignar
console.log(lastName);

var secondName = "Pedrito"; //declarando / asignando
var secondName = "Pilar"; //reasignado
console.log(secondName);

// Let

let fruit = "Apple"; //declarar y asignar
//Solo puedo reasignarlo llamando solo el nombre de la variable let . En este caso es fruit.
fruit = "Kiwi"; //reasignar
console.log(fruit); //Ya no se puede volver a declarar 

//Const

const animal = "Perro"; // declara y asigna

animal = "cat"; // reasignando
console.log(animal);

//En este caso me va a salir un error, porque como ya lo vimos, no se puede reasignar un const, menos declararlo nuevamente.

const vehicles =[];
//En este caso es un arreglo, y sobre el arreglo se puede utilizar métodos , por ejemplo push, que me permite agregar un valor en el final del array, del mismo modo pop nos permite eliminarlo. 

vehicles.push("Carro");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

