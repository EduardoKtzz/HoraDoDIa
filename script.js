function carregar() {
   var msg = document.getElementById("msg");
   var img = document.getElementById("imagem");
   var data = new Date();
   var min = data.getMinutes();
   var hora = data.getHours();
   msg.innerHTML = `Agora são ${hora} hora e ${min} minutos!`;

   if (hora >= 6 && hora < 12) {
      //BOM DIA
      img.src = "./image/manha.png";
      document.body.style.background = "#AC9193";
   } else if (hora >= 12 && hora < 18) {
      //BOA TARDE
      img.src = "./image/tarde.png";
      document.body.style.background = "#CC3F4C";
   } else if (hora >= 18 && hora <= 23) {
      //BOA  NOITE
      img.src = "./image/noite.png";
      document.body.style.background = "#FD7A18";
   } else {
      //MADRUGADA
      img.src = "./image/madrugada.png";
      document.body.style.background = "#63363E";
   }
}
