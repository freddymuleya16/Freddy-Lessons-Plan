// Lesson: JavaScript Functions

// 1. Introduction
//console.log("Lesson: JavaScript Functions");
//console.log("Functions are blocks of reusable code that perform specific tasks.");

// 2. Function Declaration and Calling
function greet(name) {
  console.log("Hello, " + name + "!");
}

// 3. Function Parameters and Arguments
//greet("John");
//greet("jane");

// 4. Return Values in Functions
function add(a, b, c, d, e, f) {
  return a + b;
}

//if(true||false)
const result = add(8, 3, 3, 4, 5, 6);
//console.log("Result of addition:", result);

// // 5. Practice with Functions
function calculateArea(length, width) {
  return length * width;
}

function pythagorus(a, b) {
  let rsqured = Math.pow(a, 2) + Math.pow(b, 2)
   
  let rootOFRSqured = Math.sqrt(r)

  return rootOFRSqured
}
console.log('The length of the hypotenous is: ', pythagorus(5, 4))
// const rectangleArea = calculateArea(5, 10);
// console.log("Area of the rectangle:", rectangleArea);


// // 6. Recap and Q&A
// console.log("In this lesson, we learned about functions in JavaScript, how to define and call them, and the importance of code reusability.");
// console.log("Now, do you have any questions related to JavaScript functions?");
