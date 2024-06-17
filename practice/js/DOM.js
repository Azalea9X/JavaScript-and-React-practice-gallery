let text = document.querySelector("#text");



function getEl(el) {
el.textContent = "asdfsdfsfwerwer"; 
el.style.color="blue";
el.style.backgroundColor="red";
}

getEl(text); 

getEl(text2);

function getAlt(alt) {
    console.log(document.querySelector(`${alt}`).getAttribute("alt"))
}

getAlt("#img-one");

function setAlt(alt, text) {
    document.querySelector(`${alt}`).setAttribute("alt", `${text}`)
}

setAlt("#img-one", "asdfsdfsfwerwer");
getAlt("#img-one");