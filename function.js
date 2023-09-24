/*Una función bloque es una funcion que se define dentro de un bloque de código, y su alcance está limitado a ese bloque*/


function greeting() {
let userName = "Ana";
console.log(userName);

if(userName==="Ana"){
console.log(`Hello ${userName}`)
}
}

greeting(); //Hasta acá todo bien porque me va a botar el resulatdo correcto

console.log(userName); //Acá ya no me daría el resultado, solo botaría un error porque estoy llamando la variable let afuera de su bloque.
