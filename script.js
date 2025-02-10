function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''

        if (fsex[0].checked) {
            gen = 'homem'
        } else if (fsex[1].checked) {
            gen = 'mulher'
        }

        res.style.textAlign = 'center'
        res.style.fontWeight = 'bold'
        res.innerHTML = 'Detetamos ' + gen + ' com ' + idade + ' anos!'
    }
}