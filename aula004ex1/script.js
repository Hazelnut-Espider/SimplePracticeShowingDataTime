function verificar (){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique se os dados estão corretos e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'maduro.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //Moca
                img.setAttribute('src', 'moca.png')
            }else if (idade < 50){
                //Adulta
                img.setAttribute('src', 'madura.png')
            }else {
                //Idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.getElementsByClassName.textAlign = 'center' // Esse comando permite que aline o texto centralizado sem a necessidade do HTML
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //Esse comando dispara a foto no layout
    }
}