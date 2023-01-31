var idade = 65
if (idade < 16) {
    consolo.log('Não vota')
} else if (idade < 18 || idade > 64) {
    console.log('Voto opcional')
} else if (idade < 64) {
    console.log('Voto Obrigatorio')
}