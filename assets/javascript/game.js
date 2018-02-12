
/* function changeBackground(){
   var colors = ["lightyellow", "pink", "lightgreen" , "lightblue" , "lavender"];

    //for(i=0; i<colors.length; i++){document.body.style.backgroundColor=(colors[i])} ?
    
    document.body.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
}; */


button.onclick=function hint(){
    alert("...words,...a hint.");
}



var answers= ["one","two","three","four","five","six","seven","eight","nine","ten"];

function randomWord(){
    var randomItem=Math.floor(Math.random()*answers.length);
    for (var i=0; i<=answers.length; i++){
    console.log(answers[randomItem]);
    document.getElementById("correctAnswer").innerHTML=(answers[randomItem]);
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
        
