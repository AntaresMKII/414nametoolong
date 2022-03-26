var i = 0;
var text = "You're about to learn a whole lot about STEM...";
var curText = document.getElementById("typing-effect").innerHTML;

function typeWriter() {

  if (i < text.length) {
    document.getElementById("typing-effect").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 110);
  }
}
