var img = document.getElementById('img')
var msg = document.getElementById('msg')
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
if (hora >= 0 && hora < 12) {
    msg.innerHTML = `Agora são ${hora}:${minutos} Bom dia`
    img.src = 'bomdia.png'
    document.body.style.background = '#97A4B7'
} else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `Agora são ${hora}:${minutos} Boa tarde`
    img.src = 'boatarde.png'
    document.body.style.background = '#DA7D51'
} else {
    msg.innerHTML = `Agora são ${hora}:${minutos} Boa noite`
    img.src = 'boanoite.png'
    document.body.style.background = '#29293A'
}