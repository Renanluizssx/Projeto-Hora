function carregar(){
let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()

msg.innerHTML = `Agora são ${hora} hora.`

if (hora >=0 && hora<12) {
    img.src = 'assets/imagem/manhã.png'
    document.body.style.background = '#7f9f10'
}else if (hora>=12 && hora <=18) {
    // boatarde
    img.src = 'assets/imagem/tarde.png'
    document.body.style.background = '#93a2b8'
} else {
    //boanoite
    img.src = 'assets/imagem/noite.png'
    document.body.style.background = '#021d3c'

}
}


