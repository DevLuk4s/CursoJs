function verificar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpas')
    let res = document.getElementById('res')
    if (ini.value == 0 || fim.value == 0 || pas.value == 0) {
        res.innerHTML = 'Impossivel contar'
        //faltam de dados
    } else {
        res.innerText = 'Contador:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (i < f) {
            for (var c = i;c <= f;c += p) {
                //contagem crescente
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (var c = i;c >= f;c -= p) {
                //contagem decrescente
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}