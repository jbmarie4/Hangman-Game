
function changeBackground(){
   var colors = ["lightyellow", "pink", "lightgreen" , "lightblue" , "lavender"];

    //for(i=0; i<colors.length; i++){document.body.style.backgroundColor=(colors[i])} ?
    
    document.body.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
};

function userGuess(){
    var correctLetters=["f","u","n"];
    var guess=prompt("Pick a letter.");
    
    
    for (i=0; i<correctLetters.length; i++);
    if (guess===correctLetters[i]){
        alert("That's correct!");
    }else{
        alert("Incorrect. Please try again.");
    }
}
        //getElementById:"column4LettersGuessed" document.write(guess);
        
