
/* 

EXERCISE NUMBER 1:
Transform this declaration of a function to a function expresion:

<code>
function example(a, b, c){
    return a+b+c
};
</code>
*/


/* Function Expresion: declaration function. */

/* As we look here, we can assign a function to a variable, and create a Expression function. 
The expression functions aren't never hoisted, that means it's impossible to call them before its declaration.
*/

let suma = function(a, b, c){
    return a + b + c;
};


/* Function Expresion: Arrow function. */

/* This Arrow function is the same as above, with easier sintaxis, and with the difference that this one won't be hoisted */

const suma2 = (a, b, c) => a + b + c;

