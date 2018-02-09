
function changeBackground(){
   // document.body.style.backgroundColor="darkgray"; 


var colors = ["lightyellow", "pink", "lightgreen" , "lightblue"];
    
document.body.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
}