//Dada una lista, encontrar los indices que sumandoce indiceA + indiceB sea igual al target
//Ejemplo [3,2,3,4] y mi target es 5, en este caso el indice 1 e indice 2 forman el target = 5

const lista1 = [1, 2, 3, 4]
const target1 = 7

const lista2 = [10, 15, 3, 7]
const target2 = 22

const lista3 = [4, 6, 1, 9, 2]
const target3 = 3

const indexByTarget = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return `El índice ${i} (${arr[i]}) + índice ${j} (${arr[j]}) = ${target}`
            }
        }
    }
    return `No se encontró la combonicación de los índices`
}

console.log(indexByTarget(lista1, target1))
console.log(indexByTarget(lista2, target2))
console.log(indexByTarget(lista3, target3))