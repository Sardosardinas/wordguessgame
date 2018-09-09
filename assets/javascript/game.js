//Le first I put all my variables
var wins= 0;
var wordElement = document.getElementById("word-display-letters");
var lossCount= 10;
var guessElement = document.getElementById("guessed-letters");
var winElement = document.getElementById("win-count");
var lossElement = document.getElementById("loss-count");
var gameOff=false;
var gameOn=true;

//Second I made my cartoon array 
var wordList = [
    "ECLIPSA",
    "PERIDOT",
    "MARCELINE",
    "FLUTTERSHY",
    "GREGORY",
    "MABEL",
    "MAMI",
    "CHISE",
    "KAYO",
    "JAINA",
    "MORTY",
    "ZED",
]

for(var i = 0; i < wordList.length; i++){
    console.log ("Cartoon " + wordList[i]);
}

//Then I made an array for the letters somebody can guess, since this is english the "ñ" is not invited to the party
var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var cartoonGuess = "";
var cartoonSplit =[];
var looneyToons="";


    
var cartoonElement = function () {
    
        document.onkeyup = function(){
            looneyToons = event.key;
 
                cartoonGuess  = wordList [Math.floor(Math.random() * 12)];
                console.log (cartoonGuess);
  
  
   
                cartoonSplit= cartoonGuess.split("");
                console.log (cartoonSplit);

                for(var u = 0; u < cartoonSplit.length; u++){
                for(var a = 0; a < letter.length; a++){
                if(cartoonSplit[u]===letter[a])cartoonSplit[u] = "_";
                wordElement.textContent = cartoonSplit;
                    }
                }
            console.log(cartoonSplit); 

            keyPress();
 
           return;
        }
        
}  


//var looneyToons="";
var guessLetter=[];

var keyPress = function(){

    document.onkeyup = function(){

        looneyToons = event.key;
        looneyToons = looneyToons.toUpperCase();
        guessLetter.splice(event.key);


        for( var b = 0; b < cartoonGuess.length; b++){
            if(!gameOn){
                if (cartoonGuess.indexOf[b] === looneyToons){ 
                    cartoonSplit[b]=looneyToons;
                }
            }
        }
        console.log(looneyToons);
        guessElement.textContent = looneyToons;

        review();
        return;

   
    }
}



var answers ="";
var playerGuess = "";
var results= [];


var review = function(){
    
    for (var c = 0; c < cartoonSplit.length; c++){
        if (looneyToons === cartoonGuess.charAt(c)) cartoonSplit[c] = looneyToons;
        if (cartoonGuess[c]=== looneyToons){
        cartoonSplit[c] = looneyToons;
        wordElement.textContent = cartoonSplit;
        }
    }   

   var answers = cartoonSplit.join("");
   console.log("-" + answers + "-");
   document.getElementById("word-display-letters");


   if (answers === cartoonGuess){

       wins++;
       lossCount=10;
       console.log(wins);
       cartoonElement();

    }else{
        lossCount --;
        console.log(lossCount);
    }
   
    if (lossCount=== 0){
        lossCount=10;
        cartoonElement();
    }
    
    
    
    document.getElementById("win-count").textContent = wins;
    document.getElementById("loss-count").textContent = lossCount;
  
  
    
}









