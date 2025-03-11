function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var img = document.getElementById('imagem')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR]Verifique os dados');
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        

        if(fsex[0].checked)
        {
            gênero = 'Homem'
            if (idade>= 0 && idade<10){
                //Criança
                img.src = 'bebeh.jpg'
            } else if (idade<21){
                //jovem
               img.src = 'adulto.jpg'
            } else if(idade>21 && idade<50){
                //adulto
                img.src = 'adulto.jpg'
            } else {//idoso
                img.src = 'velho.jpg' }
        } else  if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade>= 0 && idade<10){
                //Criança
                img.src = 'bebem.jpg'
            } else if (idade<21){
                //jovem
                img.src = 'adulta.jpg'
            } else if(idade>21 && idade<50){
                //adulta
                img.src = 'adulta.jpg'
            } else {//idoso
                img.src = 'velha.jpg' }
            }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)

    }
    
}