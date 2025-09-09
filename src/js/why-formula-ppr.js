// Nopriz modal image
var modal = document.getElementById("noprizModal");

var img = document.getElementById("noprizCert");
var modalImg = document.getElementById("cert01");
var captionText = document.getElementById("noprizCaption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = "Аттестация НОПРИЗ";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}