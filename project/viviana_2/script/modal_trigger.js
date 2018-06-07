function showModal(imgID){
  var modelo = document.getElementById('modal');

  var img = document.getElementById(imgID);
  var modalImg = document.getElementById("img");
  var caption = document.getElementById("caption");
  img.onclick = function(){
      modelo.style.display = "block";
      modalImg.src = this.src;
      caption.innerHTML = this.alt;
  }
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}
