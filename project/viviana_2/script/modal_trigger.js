function preencherModelo(imgID, desc){
  var modelo = document.getElementById('modelo');

  var imagem = document.getElementById(imgID);
  var imagemModelo = document.getElementById("imagem");
  var titulo = document.getElementById("titulo");
  var descricao = document.getElementById('desc');
  img.onclick = function(){
      modelo.style.display = "block";
      imagemModelo.src = this.src;
      titulo.innerHTML = this.alt;
      descricao.innerHTML = desc;
  }
}

function close(){
  alert("oiiiiiii");
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
      modal.style.display = "none";
  }
}
