let valores = [1, 3, 2, 4, 5]
console.log(valores)


/*
for (let pos=0;pos < valores.length; pos++) {
    console.log(`A ultima posição ${valores[pos]}`)
}
*/


for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}