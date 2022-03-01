function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 21

    msg.innerHTML = `Agora sao ${hora}hs.`

    if (hora >= 0 && hora < 12) {
        console.log('Bom dia!')
        img.src ='/aula004ex/imagens/manha-modified.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        console.log('Boa tarde!')
        img.src ='/aula004ex/imagens/tarde-modified.png'
        document.body.style.background = '#b9846f'
    } else {
        console.log('Boa noite!')
        img.src ='/aula004ex/imagens/noite-modified.png'
        document.body.style.background = '#515154'
    } if (hora >= 0 && hora < 6) {
        document.body.style.background = 'rgb(70, 142, 236)'
    }
}
