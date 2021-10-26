
let cardsss=[];
var sum = 0;
var hasBlackJack=false;
var isAlive=true;
function StartGame(){
    isAlive=true;
    var card1=getRandom();
   var card2=getRandom();
   cardsss=[card1,card2];
    sum=card1+card2;
    renderGame();
} 
function renderGame(){
    var message =""
var messageEl=document.getElementById("message-el");
var cards=document.getElementById("card");
cards.textContent="Cards : "
for(var i=0 ; i < cardsss.length ;i++){
    cards.textContent += cardsss[i] + "  ,  ";
}
document.getElementById("sum").textContent="Sum :"+sum;
if(sum<21){
    message="Do you want to draw new card ?"
}
else if (sum===21){
    message="wohoo! you are a black jack 🥳️"
    hasBlackJack=true;
}
else{
    message="Opsss! You lost the game 😭"
    isAlive=false;
}
messageEl.textContent=message;
}
function Newcard() {
    if(isAlive===true && hasBlackJack===false && sum<21  && sum!=0 ){
    var card3=getRandom();
    cardsss.push(card3);
    sum+=card3;
    renderGame();}
}
function getRandom(){
 let random = Math.floor(Math.random()*10)+2;
 if(random===1){
     return 11;
 }
 else if (random >10){
     return 10
 }
 else{
     return random;
 }

}