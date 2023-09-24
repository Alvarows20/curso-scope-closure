//En general sepamos que los bloques en JS pueden definirse como cualquier conjunto de instrucciones que estén escrito en llaves{}.

//Este es un ejemplo de un block scope 

function fruits(){
if(true){
    var fruit1 = "Apple";//function scope
    let fruit2 = "Kiwi";//block scope
    const fruit3 = "Orange";//block scope

/* console.log(fruit2);
   console.log(fruit3);*/
}
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
} //out : "Apple"
//El resto me bota un error porque las variables let y const no tienen alcance global como var, entonces para que si funcionen tenemos que colocarlos dentro de su mismo bloque, por eso se le llama block scope.

fruits()