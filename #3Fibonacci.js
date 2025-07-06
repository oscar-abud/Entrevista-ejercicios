//Descripción: Calcular la secuencia de Fibonacci de diferentes maneras.

const fibonacci = n => {
    if (n <= 1) return n

    let a = 0
    let b = 1

    console.log(`1. ${a} + ${b} = ${b}`)

    for (let veces = 2; veces <= n; veces++) {
        a = b
        b = a + b
        console.log(`${veces}. ${a} + ${b} = ${b}`)
    }

    return b
}

console.log(fibonacci(10))