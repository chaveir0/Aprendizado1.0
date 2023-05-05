function verificar(){
    var c = document.getElementById('txtc').value
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    //res.innerHTML
    //var co = c == George
    if (c == "George") {
        res.innerHTML = ('Você acertou é o corninhuuuuuu')
        img.setAttribute('src', 'george.png')
    } else{
        res.innerHTML = ('Vamos lá, você sabe quem é o corno.')
        
    }
    res.appendChild(img)
}