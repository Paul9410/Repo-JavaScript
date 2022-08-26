let numero = parseInt(prompt ("El factorial es la multiplicación de un numero natural por todos los numeros naturales que le anteceden, excluyendo el cero. Es por eso que creamos esta calculadora factorial. Ingresa un numero y determinemos su factorial!"));
let total = 1;

for ( let i = 1; i <= numero; i++){
    total = total * i;
}
alert ("El factorial de: "+numero + " es: " + total)




