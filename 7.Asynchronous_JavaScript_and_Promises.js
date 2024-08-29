// Lesson: Asynchronous JavaScript and Promises

// 1. Introduction
console.log("Lesson: Asynchronous JavaScript and Promises");
console.log("Asynchronous programming is crucial for handling time-consuming tasks in JavaScript.");

// 2. Understanding Asynchronous JavaScript
console.log("Understanding Asynchronous JavaScript:");
console.log("Asynchronous code allows tasks to run concurrently without blocking the main thread.");

// 3. Callback Functions
console.log("Callback Functions:");
function simulateAsyncTask(callback) {
  setTimeout(() => {
    console.log("Async task completed!");
    callback();
  }, 2000);
}

simulateAsyncTask(() => {
  console.log("Callback: Task is done!");
});

// 4. Introduction to Promises
console.log("Introduction to Promises:");
function simulateAsyncPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise: Async task completed!");
      resolve();
    }, 2000);
  });
}

simulateAsyncPromise().then(() => {
  console.log("Promise: Task is done!");
});

// 5. Chaining Promises
console.log("Chaining Promises:");
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id: 1, name: "John Doe" };
      console.log("User data fetched!");
      resolve(userData);
    }, 1500);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userPosts = [
        { id: 101, title: "Post 1" },
        { id: 102, title: "Post 2" },
      ];
      console.log("User posts fetched!");
      resolve(userPosts);
    }, 1000);
  });
}

fetchUserData()
  .then((user) => fetchUserPosts(user.id))
  .then((posts) => console.log("User Posts:", posts));

// 6. Error Handling with Promises
console.log("Error Handling with Promises:");
function simulateAsyncError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise: Async task encountered an error!");
      reject(new Error("Something went wrong!"));
    }, 1000);
  });
}

simulateAsyncError()
  .then(() => console.log("Promise: Task is done!"))
  .catch((error) => console.error("Promise Error:", error.message));

// 7. Practice with Asynchronous JavaScript and Promises (exercise omitted)

// 8. Recap and Q&A
console.log("In this lesson, we learned about asynchronous JavaScript and Promises.");
console.log("Now, do you have any questions related to asynchronous programming or Promises?");
