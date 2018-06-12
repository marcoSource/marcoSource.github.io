function showModal(imgID){
  var src = "assets/";
  var body = document.getElementById('body');
  var modal = document.getElementById('mainModal');
  var imgInt = imgID;
  var img = document.getElementById(imgID);
  var modalImg = document.getElementById("img");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      body.style.overflow = "hidden";
  }
  onkeypress = function(event){
    if(modal.style.display == "block"){
      if(imgInt < 20)
        imgInt++;
      if(imgInt === 20)
        imgInt = 1;
      modalImg.src = src + imgInt + ".jpg";
    }
  }
}

function closeModal() {
  document.getElementById('mainModal').style.display = "none";
  document.getElementById('body').style.overflow = "auto";
}
