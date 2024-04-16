function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value > ano)){
        alert('[ERROR] verifique os dados e tente novamente!')
    } else {
        alert('Tudo Ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        //----------------criar automaticamente a imagem----------------------//        
        var img = document.createElement('img')
        img.setAttribute('id','foto-crianca-f.png')
        //--------------------------------------------------------------------//

        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'

            //Testar se é criança, jovem, adulto ou idoso
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute()
            } else if (idade < 21){
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }

        } else if (fsex[1]) {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}    