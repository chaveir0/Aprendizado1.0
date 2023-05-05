function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
         window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var genero = ''
         var img = document.createElement('img')//Para colocar uma imagem dentro do código use o nome da var por ex ''img'
                                                //createElement>para criar uma imagem
   img.setAttribute('id', 'foto') //atribuir uma imagem no site sem precisar abrir um div no html
         if (fsex[0].checked){
            gênero =  'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-homem-m.jpg')
            } else {
                //idoso
                img.setAttribute('src','foto-idoso-m.jpg')
            }
         } else if (fsex[1].checked){
            gênero = 'Mulher'    
         }
         res.innerHTML = `Dectamos ${gênero} com ${idade} anos.`
         res.appendChild(img) 
    }
     
    
 
 }