// What is the largest prime factor of the number 600851475143? (Solving for factors under 1000) //

var array = [];

for (i = 3; i < 1000; i += 2) {
    if ((600851475143 / i) % 1 === 0) {
        array.push(i);
    }
    
}

console.log(array);

// Add prime test //
