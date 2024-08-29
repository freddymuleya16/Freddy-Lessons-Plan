    // 1. Introduction
    console.log("Lesson: JavaScript Data Types and Variables");
    console.log("JavaScript has various data types for different kinds of values.");

    // 2. Primitive Data Types
    console.log("Primitive Data Types:");
    const numberVar = 42.1;
 


    const stringVar = "Hello, World!";



    const booleanVar = false;




    const nullVar = null;
    let undefinedVar; 


    undefinedVar = null

    console.log("Number:", numberVar);
    console.log("String:", stringVar);
    console.log("Boolean:", booleanVar);
    console.log("Null:", nullVar);
    console.log("Undefined:", undefinedVar); 

    // 3. Complex Data Types
    console.log("Complex Data Types:");
    const objectVar = { name: "John", age: 30 };
    const arrayVar = [1, 2, 3, 4, 5];

    console.log("Object:", objectVar);
    console.log("Array:", arrayVar);

    // 4. Declaring and Initializing Variables
    console.log("Declaring and Initializing Variables:");
    var x = 10; // 'var' is less commonly used now, use 'let' or 'const' instead
    let y = "Hello";
    const z = true;

    console.log("x:", x);
    console.log("y:", y);
    console.log("z:", z);

    // 5. Type Coercion and Type Conversion
    console.log("Type Coercion and Type Conversion:");
    const numString = "42";
    const numValue = Number(numString); // Type conversion from string to number

    console.log("numString:", typeof numString, numString);
    console.log("numValue:", typeof numValue, numValue);
