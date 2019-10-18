//4.1
document.getElementById('img1').onmouseover = function() {
  document.getElementById('img_default').src = "imgs/js1.jpg";
}
document.getElementById('img2').onmouseover = function() {
  document.getElementById('img_default').src = "imgs/js2.jpg";
}
document.getElementById('img3').onmouseover = function() {
  document.getElementById('img_default').src = "imgs/js3.jpg";
}
document.getElementById('img4').onmouseover = function() {
  document.getElementById('img_default').src = "imgs/js4.jpg";
}
//4.2
document.getElementById('img1').onmouseout = function() {
  document.getElementById('img_default').src = "imgs/default.jpg";
}
document.getElementById('img2').onmouseout = function() {
  document.getElementById('img_default').src = "imgs/default.jpg";
}
document.getElementById('img3').onmouseout = function() {
  document.getElementById('img_default').src = "imgs/default.jpg";
}
document.getElementById('img4').onmouseout = function() {
  document.getElementById('img_default').src = "imgs/default.jpg";
}
