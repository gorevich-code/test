// One line comment

/* Several
   lines
 comment
*/

const A = 5;
let b = 10;
b += A;
console.log("b += ${A}= " + b);
b -= A;
console.log("b -= A: " + b);
b *= A;
console.log("b *= A: " + b);
b /= A;
console.log("b /= A: " + b);
b %= A;
console.log("b %= A: " + b);
b **= A;
console.log("b **= A: " + b);

// Comparison Operators

const MATH_PI = 3.14;
let variable = 10;

console.log(`MATH_PI > variable: ${MATH_PI > variable}`);
console.log(`MATH_PI >= variable: ${MATH_PI >= variable}`);
console.log(`MATH_PI < variable: ${MATH_PI < variable}`);
console.log(`MATH_PI <= variable: ${MATH_PI <= variable}`);
console.log(`MATH_PI == variable: ${MATH_PI == variable}`);
console.log(`MATH_PI != variable: ${MATH_PI != variable}`);
console.log(`MATH_PI === variable: ${MATH_PI === variable}`);
(MATH_PI > variable) ? console.log("MATH_PI is higher than variable") : console.log("MATH_PI is not higher than variable");
let result = (MATH_PI < variable) ? "MATH_PI is less than variable" : "MATH_PI is not less than variable";
console.log(result);

//Bitwise operators

console.log(`5 & 1 result: ${5&1}`);
console.log(`5 | 1 result: ${5|1}`);
console.log(`~5 result: ${~5}`);
console.log(`5 ^ 1 result: ${5 ^ 1}`);
console.log(`5 << 1 result: ${5<<1}`);
console.log(`5 >> 1 result: ${5>>1}`);
console.log(`5 >>> 1 result: ${5>>>1}`);

// Switch case
let inputkey = "x";

switch(inputkey){
  case "x": 
    console.log("x typed");
    break;
  case "y": 
    console.log("y typed");
    break;
  default:
    console.log("Any other key typed.")
}