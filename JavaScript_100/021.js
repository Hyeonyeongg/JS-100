let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("Hello!");

console.log(set); //Set(0) {}
console.log(num); //Set(5) {1, 2, 3, 4, 5}
console.log(str); //Set(5) {'H', 'e', 'l', 'o', '!'}

set.add(1); //Set {1}
set.add(5); //Set {1, 5}

set.has(1); //true
set.delete(5);
