var agora = new Date()
var hora = agora.getHours() //Para pegar o horário local ou do momento da maquina use getHours e new Date
console.log(`Agora são ${hora} horas.`)
if(hora < 12){
    console.log ('Bom dia')
} else if ( hora <= 18) {
    console.log ('Boa tarde')
}else {
    console.log('Boa noite')
}