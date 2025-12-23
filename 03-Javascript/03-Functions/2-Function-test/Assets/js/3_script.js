/* EXERSICE NUMBER THREE */

const ele1 = document.querySelector("#ele1");


function paint(elemento, color = "green") {
    elemento.style.backgroundColor = color;
}

ele1.addEventListener("click", function () {
    paint(ele1, "yellow");
});

 


