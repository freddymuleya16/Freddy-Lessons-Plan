// Lesson: Working with Web APIs: Fetch API and JSON

// 1. Introduction
console.log("Lesson: Working with Web APIs: Fetch API and JSON");
console.log("Web APIs enable interaction with external services and data over the internet.");

// 2. Introduction to Web APIs
console.log("Introduction to Web APIs:");
console.log("Web APIs allow us to access and manipulate data from external sources.");

// 3. Fetch API
console.log("Fetch API:");
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

fetchData();

// 4. Working with JSON Data
console.log("Working with JSON Data:");
const exampleObject = { name: 'John Doe', age: 30 };
const jsonString = JSON.stringify(exampleObject);
console.log("JSON string:", jsonString);

const jsonData = '{"name": "Jane Doe", "age": 25}';
const parsedData = JSON.parse(jsonData);
console.log("Parsed JSON data:", parsedData);

// 5. Error Handling with Fetch API
console.log("Error Handling with Fetch API:");
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/invalid');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

fetchDataWithErrorHandling();

// 6. Practice with Fetch API and JSON (exercise omitted)

// 7. Recap and Q&A
console.log("In this lesson, we learned about working with Web APIs, the Fetch API, and JSON data in JavaScript.");
console.log("Now, do you have any questions related to this topic?");
