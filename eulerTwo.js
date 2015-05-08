// By considering the terms in the Fibonacci sequence whose values do not exceed four million, //
// find the sum of the even-valued terms. //

var sum = 0;
var a = 1;
var b = 2;
var c = 0;

while (c < 4000000) {
    if (b % 2 === 0) {
        sum += b;
    }
    c = a + b;
    a = b;
    b = c;
}
console.log(sum);