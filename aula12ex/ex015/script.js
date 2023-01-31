function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERROR] preencha os dados acima corretamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var género = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            género = 'Homen'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            género = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${género} com ${idade} anos.`
        res.appendChild(img)
    }
}