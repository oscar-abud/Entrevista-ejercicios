//Descripción: Verificar si una cadena de texto es un palíndromo (se lee igual de izquierda a derecha).

const isPalindromo = str => {
    //Parseamos el string si nos pasan un numero
    const string = String(str)
    const limpio = string.toLowerCase()
    //Si cumple con la condicion retornara true por defecto
    return limpio === limpio.split('').reverse().join('')
    //split para transformarlo en una lista para ocupar la funcion reverse y luego uniendolo todo en una cadena de texto con join
}

//Otra forma de hacerlo sin el metodo reverse
const anotherWay = str => {
    const string = String(str)
    let reverseStr = ''
    for (const letra of string) {
        reverseStr = letra + reverseStr
    }

    return string === reverseStr
}

console.log(isPalindromo('oscar'))
console.log(isPalindromo('12321'))
console.log(isPalindromo('ana'))
// sin reverse
console.log('Sin el metodo reverse')
console.log(anotherWay('oscar'))
console.log(anotherWay('12321'))
console.log(anotherWay('ana'))
