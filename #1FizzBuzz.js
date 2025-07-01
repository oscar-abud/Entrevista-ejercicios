//Descripción: Imprimir números del 1 al 100, pero reemplazar múltiplos de 3 con "Fizz", múltiplos de 5 con "Buzz" y múltiplos de ambos con "FizzBuzz".

const fizzBuzz = n => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(100)