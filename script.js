window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 300) {
    document.getElementById("amelia-image").classList.remove("hidden")
    document.getElementById("amelia-image").classList.add("slideFromLeft")

    document.getElementById("text-wrapper").classList.remove("hidden")
    document.getElementById("text-wrapper").classList.add("slideFromRight")
  }
}
