let squares = document.querySelectorAll(`div[class^="square-"]`);

for (let i = 0; i < squares.length; i++) {

  squares[i].addEventListener("click", (e) => {
    e.stopPropagation(); 
    const clickedSquareClass = squares[i].className.split(" ")[0]; // Get the class name
 if (e.target.className="square-one"){
  e.target.classList.add("hit"); 
 }
 else if (e.target.className="square-two"){
  e.target.classList.add("hit"); 
 }
 else if (e.target.className="square-three"){
  e.target.classList.add("hit"); 
 }

 else if (e.target.className="square-four"){
  e.target.classList.add("hit"); 
 }
 else if (e.target.className="square-five"){
  e.target.classList.add("hit"); 
 }
 else if (e.target.className="square-six"){
  e.target.classList.add("hit"); 
 }
 else if (e.target.className="square-seven"){
  e.target.classList.add("hit"); 
 }

 else if (e.target.className="square-eight"){
  e.target.classList.add("hit"); 
 }
 else if (e.target.className="square-nine"){
  e.target.classList.add("hit"); 
 }
for (let i = 0; i < document.querySelectorAll(".hit").length; i++){
  if (document.querySelectorAll(".hit").length >8) {
    for (square of squares){
      square.classList.remove("hit");
    }
  }
}

  })

}


 
 
