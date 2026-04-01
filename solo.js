let box = document.getElementById("home-el")
box.style.width = "400px";
box.style.height= "600px";
box.style.border = "2px solid black";
box.style.padding= "10px ";
box.style.marginTop = "20px";
box.style.marginBottom = "90px";
let box2 = document.getElementById("guest-el")
box2.style.width = "400px";
box2.style.height= "600px";
box2.style.border = "2px solid black";
box2.style.padding= "10px ";
box2.style.marginTop = "20px";
box2.style.marginBottom = "90px" ;
let sumEl = document.getElementById("home-el")
function addone(){
    let result =  parseInt(sumEl.textContent) + 1;
    sumEl.textContent= result
}
function addtwo(){
    let result =  parseInt(sumEl.textContent) + 2;
    sumEl.textContent= result
}   
function addthree(){
    let result =  parseInt(sumEl.textContent) + 3;
    sumEl.textContent= result       
}
let sumEl2 = document.getElementById("guest-el")
function addek(){
    let result =  parseInt(sumEl2.textContent) + 1;
    sumEl2.textContent = result
}
function adddo(){
    let result =  parseInt(sumEl2.textContent) + 2;
    sumEl2.textContent = result
}
function addteen(){
    let result =  parseInt(sumEl2.textContent) + 3;
    sumEl2.textContent = result
}















