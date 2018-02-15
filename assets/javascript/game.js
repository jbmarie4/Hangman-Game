
/* function changeBackground(){
   var colors = ["lightyellow", "pink", "lightgreen" , "lightblue" , "lavender"];

    //for(i=0; i<colors.length; i++){document.body.style.backgroundColor=(colors[i])} ?
    
    document.body.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
}; */

/* var answer=prompt("pick a letter");
document.getElementById("userGuess").innerHTML=answer;
console.log(answer); */

/* button.onclick=function markLetter(){
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
 */




button.onclick=function hint(){
    alert("...words,...a hint.")
}



var answers= ["violin" , "piano","guitar","cello"];


//var hints=["hint1","hint2","hint3","hint4"];

function randomWord(){
    var randomItem=answers[Math.floor(Math.random()*answers.length)];
    var blankAnswer=[];
    for (var i=0; i<randomItem.length; i++){
        blankAnswer[i]="_";
    document.getElementById("correctAnswer").innerHTML=(blankAnswer.join (" "));
    console.log(randomItem);
    var lettersRemaining=randomItem.length;
//document.getElementsByClassName("correctAnswer").innerHTML=answers[randomItem]
    var userAttempt=prompt("pick a letter");
    for (var x=0; x<userAttempt.length; x++){
        if(answers[x] === userAttempt){
            blankAnswer[x]= userAttempt;
            
        }
    }
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
        
