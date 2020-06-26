function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}hr e ${minutos}min`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora > 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE!
        document.body.style.background = '#515154'
        img.src = 'fotonoite.jpg'
    }
}
