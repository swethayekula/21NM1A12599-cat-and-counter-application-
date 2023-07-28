let onbulb=document.getElementById("onbulb");
let imagecat=document.getElementById("imagecat")
let switchon=document.getElementById("switchon")
let onbutton=document.getElementById("onbutton");
let offbutton=document.getElementById("offbutton");
function onbutton1()
{
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
   imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
   switchon.textContent="switch on";
   switchon.style.backgroundColor=red;
   onbutton.style.backgroundcolor=green;
}
   function offbutton1()
   { 
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchon.textContent="switch off";
    switchon.style.color=red;
    onbutton.style.backgroundColor="gray";
    offbutton.style.backgroundColor="red";

}