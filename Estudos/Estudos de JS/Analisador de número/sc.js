let num = document.querySelector('input#num').value
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //vetor

function isNumero(n){
    if(Number (n) >=1 && Number (n)<= 100){ //Uma forma de conta de 1 até 100 
        return true
    } else {
        return false
    }

}
function isList (n,l){
    if (l.indexOf(Number(n))!= -1){
    return true
    } else{
        return false
    }
}

function adicionar(){
            if(isNumero(num.value) && !inLista(num.value, valores)){
                valores.push(Number(num.value))  //Push adicionar elementos a um vetor
                let item = document.createElement('option')
                item.text = `Valor ${num.value} adicionado.`
                lista.appendChild(item)
                res.innerHTML = ''

            }else {
            window.alert('Valor inválido ou já encontrado na lista.')

}
function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else {
        let tot = valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    }
}

}