function verificar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpas')
    let res = document.getElementById('res')
    
    if (ini.value == 0 || fim.value == 0 || pas.value == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contador:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for (let c = i;c <= f;c += p) {
                //contagem crescente
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            for (let c = i;c >= f;c -= p) {
                //contagem decrescente
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}