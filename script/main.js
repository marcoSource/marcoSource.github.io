function goto(html){
  window.location.href = html
}

function detectmob() { 
  if(navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
     return true;
   }
  else {
     return false;
   }
 }

 function showDialog(){
   if(detectmob()){
     alert('You are using a mobile phone! Keep in mind that the website is build for computers, so you may see weird things.')
   }
 }