let vetor = []

function adicionar() {
  let campo = document.getElementById('campo')
  let lista = document.getElementById('lista')
  let num = Number(campo.value)
  let pos 

  pos = vetor.indexOf(num)
  if (campo.value.length == 0 || pos > -1 || num < 1 || num > 100) {
    window.alert('Valor inválido ou já encontrado na lista.')
  } else {
      vetor.push(num)
      let item = document.createElement('option')
      item.text = `Valor ${num} adicionado.` 
      lista.appendChild(item) 
  }
  campo.value = ''
  campo.focus()
  res.innerHTML = ''
}

function finalizar() {

  if (vetor[0] == '') {
    window.alert('Adicione valores antes de finalizar!')
  } else {

      vetor.sort()
      let tamanho = vetor.length
      let menor = vetor[0]
      let soma = 0
      let media = 0
      let c = 0

      var conferindo = vetor.indexOf(100)
      if (conferindo == -1) {
      maior = vetor[tamanho - 1]
      } else {
        maior = 100
      }

      /*Outra forma de calcular o maior e menor número:

        for (let pos in vetor) {
          if (vetor[pos] > maior)
             maior = vetor[pos]
          if (vetor[pos] < menor)
             menor = valores[pos]
        }
      */

        while (tamanho > c){
          soma = soma + vetor[c] 
          c++
        }

      media = soma / tamanho

      res.innerHTML = `<p>Ao todo, temos ${tamanho} números cadastrados.</p>
                       <p>O maior valor informado foi ${maior}.</p>
                       <p>O menor valor informado foi ${menor}.</p>
                       <p>Somando todos os valores, temos ${soma}.</p>
                       <p>A média dos valores digitados é ${media}.</p>`
  }
}