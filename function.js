function potatoi() {
    console.log("Potatoi is eating right now.");
}

potatoi();

function product(a, b) {
    let result = a * b;
    return result;
}

let productResult = product(5, 10);
console.log("Product result: " + productResult);

const sum = (x, y) => {
    return x + y;
}

console.log(sum(8, 16));

const hehe = name => console.log("Hello, " + name);

hehe("Potatoi what cha doing?");

const num = [1, 2, 3, 4, 5];

console.log(num);

num.push(6);

console.log(num);

num.unshift(0);

console.log(num);

num.pop();

console.log(num);

num.shift();

console.log(num);

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
