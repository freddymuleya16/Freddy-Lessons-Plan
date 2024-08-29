// Lesson: Introduction to Objects and Object Methods

// 1. Introduction
console.log("Lesson: Introduction to Objects and Object Methods");
console.log("Objects are complex data structures used to store key-value pairs in JavaScript.");

// 2. What are Objects?
console.log("What are Objects?");
const person = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
};
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2022,
};
console.log("Person object:", person);
console.log("Car object:", car);

// 3. Accessing and Modifying Object Properties
console.log("Accessing and Modifying Object Properties:");
console.log("Person name:", person.name);
console.log("Car make:", car['make']);

person.age = 31;
car['year'] = 2023;

console.log("Modified Person object:", person);
console.log("Modified Car object:", car);

// 4. Adding and Deleting Object Properties
console.log("Adding and Deleting Object Properties:");
person.gender = 'Male';
car.color = 'blue';

console.log("After adding properties to Person object:", person);
console.log("After adding properties to Car object:", car);

delete person.email;
delete car.year;

console.log("After deleting properties from Person object:", person);
console.log("After deleting properties from Car object:", car);

// 5. Object Methods
console.log("Object Methods:");
const person = {
  name: 'John Doe',
  age: 30,
  greet: function() {
    console.log('Hello, my name is ' + this.name + '.');
  },
};

person.greet();

// 6. Practice with Objects and Object Methods (exercise omitted)

// 7. Recap and Q&A
console.log("In this lesson, we learned about objects and object methods in JavaScript.");
console.log("Now, do you have any questions related to objects or object methods?");
