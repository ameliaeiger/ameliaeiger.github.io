window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("contact-main-content").classList.remove("hidden")
    document.getElementById("contact-main-content").classList.add("slideFromLeft")

    // document.getElementById("text-wrapper").classList.remove("hidden")
    // document.getElementById("text-wrapper").classList.add("slideFromRight")
  }
}
