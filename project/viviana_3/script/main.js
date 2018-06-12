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
      rndBackground();
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

function showTextOnOver(cardID){
  var text = document.getElementById('t');
  var cardImage = document.getElementById(cardID);
  cardImage.onmouseover = function(){
    text.style.display = "block";
    text.innerHTML = cardImage.alt;
  }

  onmouseout = function(){
    text.style.display = "none";
  }
}

function closeModal() {
  document.getElementById('mainModal').style.display = "none";
  document.getElementById('body').style.overflow = "auto";
}

function rndBackground(){
  var rndNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById('body').style.backgroundImage = 'url("../assets/" + rndNumber + ".jpg")';
}

function goto(html){
  window.location.href = html
}
