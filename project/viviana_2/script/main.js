function showModal(imgID){
  var src = "assets/";
  var body = document.getElementById('body');
  var modal = document.getElementById('mainModal');
  var imgInt = imgID;
  var img = document.getElementById(imgID);
  var modalImg = document.getElementById("img");
  var modalImgLeft = document.getElementById("img_left");
  var modalImgRight = document.getElementById("img_right");

  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImgRight.src = src + (imgInt + 1) + ".jpg";
      if(imgInt < 2)
        modalImgLeft.style.display = "hidden";
      body.style.overflow = "hidden";
  }
  onkeypress = function(event){
    if(modal.style.display == "block"){
      if(imgInt < 20){
        imgInt++;
      }
      if(imgInt === 20){
        imgInt = 1;
        modalImgLeft.src = src + "20.jpg";
      }
      modalImg.src = src + imgInt + ".jpg";
      modalImgLeft.src = src + (imgInt - 1) + ".jpg";
      modalImgRight.src = src + (imgInt + 1) + ".jpg";
    }
  }
}

function closeModal() {
  document.getElementById('mainModal').style.display = "none";
  document.getElementById('body').style.overflow = "auto";
}
