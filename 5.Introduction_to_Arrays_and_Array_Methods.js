// Lesson: Introduction to Arrays and Array Methods

// 1. Introduction
console.log("Lesson: Introduction to Arrays and Array Methods");
console.log("Arrays are data structures used to store collections of elements in JavaScript.");

// 2. What are Arrays?
console.log("What are Arrays?");
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];
console.log("Numbers array:", numbers);
console.log("Fruits array:", fruits);

// 3. Accessing and Modifying Array Elements
console.log("Accessing and Modifying Array Elements:");
const colors = ['red', 'green', 'blue'];
console.log("First color:", colors[0]);
colors[1] = 'yellow';
console.log("Modified colors array:", colors);

// 4. Array Methods
console.log("Array Methods:");
console.log("Length of colors array:", colors.length);

colors.push('purple');
console.log("After push:", colors);

colors.pop();
console.log("After pop:", colors);

colors.shift();
console.log("After shift:", colors);

colors.unshift('brown');
console.log("After unshift:", colors);

colors.splice(1, 1, 'pink', 'cyan');
console.log("After splice:", colors);

// 5. Iterating through Arrays
console.log("Iterating through Arrays with for loop:");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log("Iterating through Arrays with forEach method:");
colors.forEach((color) => {
  console.log(color);
});

// 6. Practice with Arrays and Array Methods (exercise omitted)

// 7. Recap and Q&A
console.log("In this lesson, we learned about arrays and array methods in JavaScript.");
console.log("Now, do you have any questions related to arrays or array methods?");
