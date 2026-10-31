const cars = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];

cars.forEach(x=> {
    console.log(x);
})

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(y=> {
    console.log(y);
})

const cow = ['Bessie', 'MooMoo', 'Daisy', 'Buttercup'];

const newcow = cow.map(z => {
    return z + ' is a cow';
})
console.log(newcow);

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = Numbers.filter(num => {
    return num % 2 === 0;
});
console.log(evenNumbers);

const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 21 }
];

const studentNames = students.map(student => {
    return student.name;
});
console.log(studentNames);