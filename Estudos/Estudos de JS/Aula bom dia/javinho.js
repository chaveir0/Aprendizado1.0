function carregar() {
var msg = document.getElementById('msg')
var img= document.getAnimations
var data = new Date()
var hora = 10


//var hora= data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
     //Bom dia!
     document.body.style.background = '#e2cd9f'
     
} else if (hora >= 12 && hora < 18){
      document.body.style.background = '#b9846f'

} else {
    document.body.style.background = '#515154'
    img
}
/* Atenção ao tamanho da imagem use de preferência tamanhos pequenos 250 por 250, as imagens precisão estar
estar dentro da pagina onde estão os arquivos html, css e JS que está trabalhando.
*/
//Para colocar uma imagem dentro do código use o nome da var por ex ''img'e dentro do   IF OU ELSE use>>>' img.src = ''nome do arquivo''

}


