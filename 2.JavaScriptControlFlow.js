// Lesson: JavaScript Control Flow

// 1. Introduction
//console.log("Lesson: JavaScript Control Flow");
// console.log("Control flow includes conditional statements and loops in JavaScript.");

// // 2. Conditional Statements: if, else if, else
const age = 13;
if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}

// // 3. Loops: while and for
// console.log("Using a while loop to count from 1 to 5:");
let age = 1;
while (age < 100) {
    if (age >= 18) {
        console.log(age,"-You are an adult.");
    } else if (age >= 13) {
        console.log(age,"-You are a teenager.");
    } else {
        console.log(age,"-You are a child.");
    }    
    age = age + 1; // i++
}

for (
    let age = 1; //start
    age < 100; //before each run
    age++//after each run
    ) {
    if (age >= 18) {
        console.log(age,"-You are an adult.");
    } else if (age >= 13) {
        console.log(age,"-You are a teenager.");
    } else {
        console.log(age,"-You are a child.");
    }
}





// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// console.log("Using a for loop to count from 1 to 5:");
// for (let j = 1; j <= 5; j++) {
//   console.log(j);
// }

// // 4. Practice with Control Flow
// console.log("Practice: Finding even numbers from 1 to 10 using a loop:");
// for (let num = 1; num <= 10; num++) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

// // 5. Recap and Q&A
// console.log("In this lesson, we learned about control flow in JavaScript using conditional statements and loops.");
// console.log("Now, do you have any questions related to control flow?");



//1.create an if statement that logs hot, cold, freezing and burning based on a variable temparature

//2.create a forloop that does the same for temparatures from -10 to 50

//3. create while loop that does the same as for loop