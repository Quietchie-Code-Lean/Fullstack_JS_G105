/* EXERCISE NUMBER FOUR */



let divBox = document.querySelector(".divBox");
divBox.style.marginTop = "25px";
divBox.style.marginBottom = "25px";

let element1 = document.querySelector(".element1");
element1.style.width = "200px";
element1.style.height = "200px";
element1.style.backgroundColor = "blue"

let element2 = document.querySelector(".element2");
element2.style.width = "200px";
element2.style.height = "200px";
element2.style.backgroundColor = "red";

let element3 = document.querySelector(".element3");
element3.style.width = "200px";
element3.style.height = "200px";
element3.style.backgroundColor = "green";

let element4 = document.querySelector(".element4");
element4.style.width = "200px";
element4.style.height = "200px";
element4.style.backgroundColor = "yellow";

element1.addEventListener("click", function(){
    element1.innerHTML = element1.style.backgroundColor = "black";
});
element2.addEventListener("click", function(){
    element2.innerHTML = element2.style.backgroundColor = "black";
});
element3.addEventListener("click", function(){
    element3.innerHTML = element3.style.backgroundColor = "black";
});
element4.addEventListener("click", function(){
    element4.innerHTML = element4.style.backgroundColor = "black";
}); 