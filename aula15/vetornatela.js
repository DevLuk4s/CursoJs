let valores = [1, 3, 2, 5, 6, 7, 8]
/*
for (let pos = 0;pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}