function scrollTo(divID){
    console.log("Scroll To: " + divID);
    var element = document.getElementById(divID);
    element.scrollIntoView();
}