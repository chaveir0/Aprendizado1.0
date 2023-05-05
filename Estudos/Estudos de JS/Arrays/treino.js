let valores = [8, 3, 2, 4]
valores.sort()
valores.push(1)
console.log (valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)
let pos = valores.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}








/*for(let pos in valores ){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}
*/