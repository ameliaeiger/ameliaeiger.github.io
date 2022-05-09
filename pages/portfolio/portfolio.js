window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 300) {
    document.getElementById("portfolio-text").classList.remove("hidden")
    document.getElementById("portfolio-text").classList.add("slideFromLeft")

    document.getElementById("text-wrapper").classList.remove("hidden")
    document.getElementById("text-wrapper").classList.add("slideFromRight")
  }
}


// GIF SLIDESHOW //

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("grid-item");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
