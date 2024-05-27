let casa, quebralinha
let tabuleiro = new Array(8)
for (let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(8)
}

for(let i = 0; i < tabuleiro.length; i++){
    quebralinha = document.createElement('br')
    document.body.append(quebralinha)
    for(let j = 0; j < tabuleiro[i].length; j++){
       // console.log(`casa: ${i} ${j}`)//teste
        casa = document.createElement('button')
        casa.setAttribute('id', 'cs' + i + "" + j)
        document.body.append(casa)
        
    }
}
