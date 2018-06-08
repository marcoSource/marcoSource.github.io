function showModal(imgID){
  var src = "assets/";
  var modelo = document.getElementById('modal');
  var imgInt = imgID;
  var img = document.getElementById(imgID);
  var modalImg = document.getElementById("img");
  var caption = document.getElementById("caption");
  img.onclick = function(){
      modelo.style.display = "block";
      modalImg.src = this.src;
      caption.innerHTML = this.alt;
  }
  onkeypress = function(event){
    if(modelo.style.display == "block"){
      if(imgInt < 20)
        imgInt++;
      if(imgInt === 20)
        imgInt = 1;
      modalImg.src = src + imgInt + ".jpg";
    }
  }
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}
