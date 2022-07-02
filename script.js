/*global myFunction, document, window*/

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
/*xml to html table*/
function loadXMLDoc() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
    const xmlDoc = xml.responseXML;
    const exp = xmlDoc.getElementsByTagName("Experience");
    myFunction(exp);
  }
  xmlhttp.open("GET", "Experience.xml");
  xmlhttp.send();
}


/*modal functioning*/
function myFunction(cd) {
  let table="<tr><th>Position</th><th>Dates</th><th>Description</th></tr>";
  for (let i = 0; i < exp.length; i++) {
    table += "<tr><td>" +
    exp[i].getElementsByTagName("Position")[0].childNodes[0].nodeValue +
    "</td><td>" +
    exp[i].getElementsByTagName("Dates")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("Experience").innerHTML = table;
}

/*

document.getElementById("testing").addEventListener("click",function(){
                document.getElementById("testingp").innerHTML="I clicked the button.";   
            });
*/


/* access the application form and hide it first
document.getElementById("app_form").style.display = "none";


the application form appears if user click 'Show form' button

document.getElementById("showform").addEventListener("click", function(){
    document.getElementById("app_form").style.display="";    
});

the application form hides if user click 'Hide form' button
document.getElementById("hideform").addEventListener("click",function(){
    document.getElementById("app_form").style.display="none";
    
});

/*
document.getElementById("yes").addEventListener("change",function(){
    document.getElementById("app_form").style.display=""; 
});

document.getElementById("no").addEventListener("change",function(){
    document.getElementById("app_form").style.display="none";
});

document.getElementById("submit").addEventListener("click",function(){
    var v = document.getElementById("answer").value
    alert("place holder " + v)
});*/


