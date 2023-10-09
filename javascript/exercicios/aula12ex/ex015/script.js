function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0  || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'imagens/homem/criança-h.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', 'imagens/homem/jovem-h.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', 'imagens/homem/adulto-h.jpg')
      } else {
        img.setAttribute('src', 'imagens/homem/idoso-h.jpg')
      }
    } else if (fsex[1].checked){
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'imagens/mulher/crianca-m.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', 'imagens/mulher/jovem-m.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', 'imagens/mulher/adulta-m.jpg')
      } else {
        img.setAttribute('src', 'imagens/mulher/idosa-m.jpg')
      }
    }
    res.style.textAlign = 'center' 
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }

}