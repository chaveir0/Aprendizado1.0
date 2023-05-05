function parimpar(n) {
    if (n%2 == 0){ // % = sobra da divisão
        return'Par!'
    }else {
        return 'Ímpar!'
    }
}
let res = parimpar(3)
console.log(res)

/*outra forma pode ser usando
console.log(parimpar(4))
*/