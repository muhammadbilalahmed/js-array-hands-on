
let originalArray = [10, 89, 57, 89, 90];
let doubledArray = originalArray.map(num => num * 2);
console.log(doubledArray);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

function doubleNumbers(arr) {
    return arr.map((ar) => ar * 2)
}
console.log(doubleNumbers([2, 5, 100]));

function stringItUp(arr) {
    return arr.map(ar => ar.toString());
}
console.log(stringItUp([2, 5, 100]));

function capitalizeNames(arr) {
    return arr.map(ar => ar.toUpperCase())
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


function namesOnly(arr) {
    return arr.map(ar => ar.name)
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));


function makeStrings(arr) {
    return arr.map(function (person) {
        if (person.age >= 18) {
            return person.name + " can go to The Matrix";
        } else {
            return person.name + " is under age!!";
        }
    });
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// Define a function called cleanNames that accepts an array of strings 
// containing additional space characters at the beginning and end.
// The cleanNames() function should use the array map method to return a new array full of trimmed names.For example:

let cleanNames = ()
const nameArrays = CleanNames.map(name => name.trim());
console.log(nameArrays);

function cleanNames(items) {
    const result = items.map(item => item.trim())
    return result
}

cleanNames([" avengers", "   captain_america", " ironman   ", " black panther   "])

//  Create a new array using the map function whose each element is equal to the original element plus 4.

let numbers = [4, 8, 10, 203, 53, 11];
const result = numbers.map(number => (number + 4))
console.log(result)



let numbers = [1, 3, 5, 7, 2, 4, 6, 8, 10, 13, 16, 28, 50, 51, 53, 58];
let newnumbers = numbers.filter(number => (number % 2 == 0));
console.log(newnumbers);

