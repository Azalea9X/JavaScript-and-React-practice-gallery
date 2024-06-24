let squares = document.querySelectorAll(`div[class^="square-"]`);
let ifHit = null;
let hits = null;  
let randomLoc = Math.floor(Math.random() * 9); 
 function handleKeyPress(e) {
  if (e.key=="space") {
    alert("Hello"); 
  }
 }
  
for (let i = 0; i < squares.length; i++) {

  function generateShip(e, health) {
    let loc1, loc2, loc3, loc4, loc5;
  
   loc1 = randomLoc; 
  loc2 = loc1 + 1; 
   loc3 = loc2 +1; 
   loc4 = loc3+1; 
   loc5 = loc4 +1;
   this.health = health;
  this.isSunk = (e) => {
    alert("You've sunk my battleship");
  }
  this.isHit = (e) => {
    e.target.classList.add("hit"); 
    hits++;
  
    this.health -1; 
    if (this.health == 0 || document.querySelectorAll(".miss").length >6 ) {
      alert("Game over"); 
  
    }
  }
  
  
    this.speak =(e) => {
    if (e.target.textContent == "A3") {
  
    }
   }
  }
  
  let newShip = new generateShip(5); 
  
squares[i].addEventListener("keydown", (e) => {
  //For the spacebar
  if (e.isComposing || e.keyCode == 32) {
   
    e.stopPropagation(); 
    const clickedSquareClass = squares[i].className.split(" ")[0]; // Get the class name 
    let loc1 = Math.floor(Math.random() *9); 
    let loc2 = loc1 +1; 
    let loc3 = loc2 +1; 
    let loc4 = loc3 +1; 
    let loc5 = loc4 +1;
    
 if (e.target.className="square-one"){
 
  if (loc1 == 1 || loc2 == 1 || loc3 ==1 || loc4 == 1 || loc5 ==1 ){
    newShip.isHit(e);  }
  else {
e.target.textContent = "Miss"; 
e.target.classList.add("miss"); 
  }
 
 }
 else if (e.target.className="square-two"){
   
  if (loc1 == 2 || loc2 == 2 || loc3 ==2 || loc4 == 2 || loc5 ==2 ){
    newShip.isHit(e); }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }

 }
 else if (e.target.className="square-three"){
  if (loc1 == 3 || loc2 == 3 || loc3 ==3 || loc4 == 3 || loc5 ==3 ){
    newShip.isHit(e);  }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }

 else if (e.target.className="square-four"){
  if (loc1 == 4 || loc2 == 4 || loc3 ==4 || loc4 == 4 || loc5 ==4 ){
    newShip.isHit(e); }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }
 else if (e.target.className="square-five"){
  if (loc1 == 5 || loc2 == 5 || loc3 ==5 || loc4 == 5 || loc5 ==5 ){
    newShip.isHit(e); }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }
 else if (e.target.className="square-six"){
  if (loc1 == 6 || loc2 == 6 || loc3 ==6 || loc4 == 6 || loc5 ==6 ){
    newShip.isHit(e);  }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }
 else if (e.target.className="square-seven"){
  if (loc1 == 7 || loc2 == 7 || loc3 ==7 || loc4 == 7 || loc5 ==7 ){
    newShip.isHit(e); }
  else {7
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }

 else if (e.target.className="square-eight"){
  if (loc1 == 8 || loc2 == 8 || loc3 ==8 || loc4 == 8 || loc5 ==8 ){
    newShip.isHit(e); }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }
 else if (e.target.className="square-nine"){
  if (loc1 == 9 || loc2 == 9 || loc3 ==9 || loc4 == 9 || loc5 ==9 ){
    newShip.isHit(e); }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }
for (let i = 0; i < document.querySelectorAll(".hit").length; i++){
  if (document.querySelectorAll(".hit").length >3) {
    ifHit = true; 
  alert("game over");
  for (square of squares) {
    square.classList.remove("hit");
  }
}
  else if (document.querySelectorAll(".miss").length >6) {
alert("Game over"); 
  }
}
  }
  //Adding shortcut functionality
//Left key
  if (e.keyCode == 37) {
    e.target.blur();
    e.target.previousElementSibling.focus();
  }

  //Right key
  if (e.keyCode == 39) {
    e.target.blur();
    e.target.nextElementSibling.focus();
  }
  //keyUp
  if (e.keyCode == 38) {
    e.target.blur();
    e.target.previousElementSibling.previousElementSibling.previousElementSibling.focus();
  }
  //keyDown
  if (e.keyCode == 40) {
    e.target.blur();
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.focus();
  }
  if (e.keyCode == 37 || e.keyCode == 39){
e.target.blur();

  }
})

  squares[i].addEventListener("click", (e) => {
    
    e.stopPropagation(); 
    const clickedSquareClass = squares[i].className.split(" ")[0]; // Get the class name 
    let loc1 = Math.floor(Math.random() *9); 
    let loc2 = loc1 +1; 
    let loc3 = loc2 +1; 
    let loc4 = loc3 +1; 
    let loc5 = loc4 +1;
    
 if (e.target.className="square-one"){
 
  if (loc1 == 1 || loc2 == 1 || loc3 ==1 || loc4 == 1 || loc5 ==1 ){
    newShip.isHit(e);  }
  else {
e.target.textContent = "Miss"; 
e.target.classList.add("miss"); 
  }
 
 }
 else if (e.target.className="square-two"){
   
  if (loc1 == 2 || loc2 == 2 || loc3 ==2 || loc4 == 2 || loc5 ==2 ){
    newShip.isHit(e); }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }

 }
 else if (e.target.className="square-three"){
  if (loc1 == 3 || loc2 == 3 || loc3 ==3 || loc4 == 3 || loc5 ==3 ){
    newShip.isHit(e);  }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }

 else if (e.target.className="square-four"){
  if (loc1 == 4 || loc2 == 4 || loc3 ==4 || loc4 == 4 || loc5 ==4 ){
    newShip.isHit(e); }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }
 else if (e.target.className="square-five"){
  if (loc1 == 5 || loc2 == 5 || loc3 ==5 || loc4 == 5 || loc5 ==5 ){
    newShip.isHit(e); }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }
 else if (e.target.className="square-six"){
  if (loc1 == 6 || loc2 == 6 || loc3 ==6 || loc4 == 6 || loc5 ==6 ){
    newShip.isHit(e);  }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }
 else if (e.target.className="square-seven"){
  if (loc1 == 7 || loc2 == 7 || loc3 ==7 || loc4 == 7 || loc5 ==7 ){
    newShip.isHit(e); }
  else {7
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }

 else if (e.target.className="square-eight"){
  if (loc1 == 8 || loc2 == 8 || loc3 ==8 || loc4 == 8 || loc5 ==8 ){
    newShip.isHit(e); }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }
 else if (e.target.className="square-nine"){
  if (loc1 == 9 || loc2 == 9 || loc3 ==9 || loc4 == 9 || loc5 ==9 ){
    newShip.isHit(e); }
  else {
    e.target.textContent = "Miss"; 
    e.target.classList.add("miss"); 
  }
 }
for (let i = 0; i < document.querySelectorAll(".hit").length; i++){
  if (document.querySelectorAll(".hit").length >3) {
    ifHit = true; 
  alert("game over");
  for (square of squares) {
    square.classList.remove("hit");
  }
}
  else if (document.querySelectorAll(".miss").length >6) {
alert("Game over"); 
  }
}
})}

//Add a shortcut for accessibility to add keyboard presses. 
//Think about expanding the board and adding more ships, trying to make multiple ships more dynamic. That could be fun! 
