/* EXERSICE NUMBER THREE */

const ele1 = document.querySelector("#ele1");


function pintar(elemento, color = "green") {
    elemento.style.backgroundColor = color;
}

ele1.addEventListener("click", function () {
    pintar(ele1, "yellow");
});

 


