
function scrollToProject(name){
    console.log("Scroll To: Project ==  " + name);
    var element = document.getElementById(name);
    element.scrollIntoView();
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  