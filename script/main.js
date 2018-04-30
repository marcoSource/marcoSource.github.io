function goToWebsite(url){
  window.location.href = url
}

function showTextOnHover(img){
  var imageText = document.getElementById('imgText');
  imageText.innerHTML = img.alt;
}
