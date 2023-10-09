let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)
if (pos == -1) { //quando o indexOf não encontra o valor no vetor, ele retorna -1
  console.log('O valor não foi encontrado!')
} else {
console.log(`O valor 4 está na posição ${pos}`)
}

/* 
  ANOTAÇÕES

  consultar elementos em casas específicas: (nome do vetor)[valor]
  Ex.: num[0] (mostra o elemento presente na primeira casa do vetor)

  adicionar elementos ao vetor em casas especificas: (nome do vetor)[] = (valor)
  Ex.: num[3] = 6 (valor 6 é adicionado à casa 3 do vetor)

  adicionar elementos ao vetor na última posição: (nome do vetor).push(valor) 
  Ex.: num.push(7) (valor 7 é adicionado à ultima casa do vetor)

  consultar o comprimento do vetor: (nome do vetor).length

  colocar os elementos do vetor em ordem crescente: (nome do vetor).sort()

  buscar valores dentro de um vetor: (nome do vetor).indexOf(valor)
  Ex.: num.indexOf(7) (Busca casas com o valor 7 e mostra sua posição)
*/