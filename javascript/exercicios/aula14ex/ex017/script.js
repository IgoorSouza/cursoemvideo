function gerar() {
  var tab = document.getElementById('seltab')
  var num = document.getElementById('num')
  var valor = Number(num.value)
  var mult = 1
  var resultado

  if (num.value.length == 0) {
    window.alert('Por favor, digite um número!')
  } else {
    tab.innerHTML = ''
    while (mult <= 10) {
      resultado = mult * valor
      let item = document.createElement('option')
      item.text = `${valor} x ${mult} = ${resultado}`
      item.value = `tab${mult}` 
      tab.appendChild(item)
      mult++
      }
    }
  }