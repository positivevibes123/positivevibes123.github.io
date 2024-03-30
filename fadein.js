var opacity = 0; 
var intervalID = 0; 
window.onload = fadeIn; 
          
function fadeIn() { 
    setInterval(show, 50);
} 
          
function show() { 
    var body = document.getElementById("body"); 
    opacity = Number(window.getComputedStyle(body) 
                            .getPropertyValue("opacity"));
                            
    console.log(opacity);
    if (opacity < 1) { 
        opacity = opacity + 0.05; 
        body.style.opacity = opacity 
    } else { 
        clearInterval(intervalID); 
    } 
} 