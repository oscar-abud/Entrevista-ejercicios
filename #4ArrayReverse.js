//Descripción: Invertir un array sin usar sus métodos.

const reverse = arr => {
    const resultado = []

    for (let i = arr.length - 1; i >= 0; i--) {
        resultado.push(arr[i])
    }

    return resultado.join(' ')
}

console.log(reverse("HolaMundo"))
console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]))