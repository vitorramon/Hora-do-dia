function carregar() {

var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

if(hora>=0 && hora < 12){
 //Bom dia
 img.src = "fotomanha.png"
 document.body.style.background = "#ffe1b7" //código das cores imagem tirada do photoshop
} else if(hora >= 12 && hora <18){
//Boa tarde
img.src = "fototarde.png"
document.body.style.background = "#e3b11d"
} else {
//Boa noite
img.src = "fotonoite.png"
document.body.style.background = "#073d76"
}
}