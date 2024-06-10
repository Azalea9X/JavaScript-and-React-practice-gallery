let squares = document.querySelectorAll(`div[class^="square-"]`);
let ifHit = null;
let hits = null;  
let randomLoc = Math.floor(Math.random() * 5); 
let loc1 = randomLoc + 1; 

let loc2 = loc1 + 2; 
let loc3 = loc2 + 3; 


for (let i = 0; i < squares.length; i++) {

  squares[i].addEventListener("click", (e) => {
    e.stopPropagation(); 
    const clickedSquareClass = squares[i].className.split(" ")[0]; // Get the class name
 if (e.target.className="square-one"){
  let num1 = Math.floor(Math.random() *5); 
  if (num1 == 1){
  e.target.classList.add("hit"); }
  else {
    alert("Miss!!!");
  }
 
 }
 else if (e.target.className="square-two"){
  let num2 = Math.floor(Math.random() *5); 
  if (num2 == 2){
  e.target.classList.add("hit"); }
  else {
    alert("Miss!!!");
  }

 }
 else if (e.target.className="square-three"){
  let num3 = Math.floor(Math.random() *5); 
  if (num3 == 3){
  e.target.classList.add("hit"); }
  else {
    alert("Miss!!!");
  }
 }

 else if (e.target.className="square-four"){
  let num4 = Math.floor(Math.random() *5); 
  if (num4 == 4){
  e.target.classList.add("hit"); }
  else {
    alert("Miss!!!");
  }
 }
 else if (e.target.className="square-five"){
  let num5 = Math.floor(Math.random() *5); 
  if (num5 == 5){
  e.target.classList.add("hit"); }
  else {
    alert("Miss!!!");
  }
 }
 else if (e.target.className="square-six"){
  let num6 = Math.floor(Math.random() *5); 
  if (num6 == 6){
  e.target.classList.add("hit"); }
  else {
    alert("Miss!!!");
  }
 }
 else if (e.target.className="square-seven"){
  let num7 = Math.floor(Math.random() *5); 
  if (num7 == 7){
  e.target.classList.add("hit"); }
  else {
    alert("Miss!!!");
  }
 }

 else if (e.target.className="square-eight"){
  let num8 = Math.floor(Math.random() *5); 
  if (num8 == 8){
  e.target.classList.add("hit"); }
  else {
    alert("Miss!!!");
  }
 }
 else if (e.target.className="square-nine"){
  let num9 = Math.floor(Math.random() *5); 
  if (num9 == 9){
  e.target.classList.add("hit"); }
  else {
    alert("Miss!!!");
  }
 }
for (let i = 0; i < document.querySelectorAll(".hit").length; i++){
  if (document.querySelectorAll(".hit").length >3) {
    ifHit = true; 
    if (ifHit) {
    alert("Game over");}
    for (square of squares){
      square.classList.remove("hit");
    }
  }
}

  })

}


 
 
