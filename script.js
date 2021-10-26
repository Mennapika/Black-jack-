var card1=getRandom();
var card2=getRandom();
let cardsss=[card1,,card2];
var sum = card1 + card2;
function StartGame(){
    renderGame();
} 
function renderGame(){
    var message =""
var messageEl=document.getElementById("message-el");
var cards=document.getElementById("card");
cards.textContent="Cards : "
for(var i=0 ; i < cardsss.length -1 ;i++){
    cards.textContent += cardsss[i] + "  ,  ";
}
document.getElementById("sum").textContent="Sum :"+sum;
if(sum<21){
    message="Do you want to draw new card ?"
}
else if (sum===21){
    message="wohoo! you are a black jack 🥳️"
}
else{
    message="Opsss! You lost the game 😭"
}
messageEl.textContent=message;
}
function Newcard() {
    var card3=getRandom();
    cardsss.push(card3);
    sum+=card3;
    renderGame();
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