function toggleMenu(){
  var icon = document.getElementById("hamburger");
  var nav = document.getElementById("nav-links");
  
  if (nav.style.display === 'none' ){
    nav.style.display = 'flex';
  }
  else{
    nav.style.display = 'none';
  }
}
function setupHamburgerMenu(){
    var icon = document.getElementById("hamburger");
    var nav = document.getElementById("nav-links");

    if (window.innerWidth<=768){
        //show the hamburger icon and hide the notification bar
        icon.style.display = 'block';
        nav.style.display = 'none';
    }
    else{
        //hide the hamburger icon and show the notification bar
        icon.style.display = 'none';
        nav.style.display = 'flex';
    }
}
//Running the setHamburgerMenu on page load resize
window.addEventListener('load',setupHamburgerMenu);
window.addEventListener('resize',setupHamburgerMenu);


// Get the button
var mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var workInProgress = document.getElementsByClassName("icon");
var len = workInProgress.length;
for( var x =0; x<len;x++){
    workInProgress[x].addEventListener('click',function(){
        alert("This webpage is currently under development.");
    })
}
