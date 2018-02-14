
/* function changeBackground(){
   var colors = ["lightyellow", "pink", "lightgreen" , "lightblue" , "lavender"];

    //for(i=0; i<colors.length; i++){document.body.style.backgroundColor=(colors[i])} ?
    
    document.body.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
}; */

/* var answer=prompt("pick a letter");
document.getElementById("userGuess").innerHTML=answer;
console.log(answer); */

button.onclick=function markLetter(){
    var aKey= "a";
    document.getElementById("userGuess").innerHTML=akey;
    console.log(akey);
}


button.onclick=function recordGuess(e){
    var evt= e ? e:event;
    var keyCode= evt.keyCode;
   document.getElementById("userGuess").innerHTML=
   console.log("keyCode=" +keyCode);
                                 //user type letter and letter appears in userGuess section
};





button.onclick=function hint(){
    alert("...words,...a hint.")
}



var answers= ["one","two","three","four","five","six","seven","eight","nine","ten"];

function randomWord(){
    var randomItem=[Math.floor(Math.random()*answers.length)];
    console.log(randomItem);
    var blankAnswer=[];
    for (var i=0; i<randomItem.length; i++){
        blankAnswer[i]="_";
    alert(blankAnswer.join (" "));
//document.getElementsByClassName("correctAnswer").innerHTML=answers[randomItem]
}
}





/* function userGuess(){
    var correctLetters=["f","u","n"];
    var guess=prompt("Pick a letter."); */
    
    
  /*   for (i=0; i<correctLetters.length; i++){
    if (guess===correctLetters[i]){
        alert("That's correct!");
    }else{
        alert("Incorrect. Please try again.");
        getElementById()document.write(guess);
    }
}} */
        //getElementById:"column4LettersGuessed" document.write(guess);
        
