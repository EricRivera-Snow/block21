// === Example of blocking code ===

// setTimeout(function () {
//   console.log("timeout function saying hi!");
// }, 1000);

// function takesForever() {
//   for (let i = 1; i < 100000; i++) {
//     console.log("looping");
//   }
// }

// takesForever();

// Used to illustrate call stack - please see video for full explanation

// function firstFn() {
//   console.log("first fn start");
//   secondFn();
//   console.log("first in finish");
// }

// function secondFn() {
//   console.log("second fn start");
//   fourthFn();
//   console.log("second fn finish");
// }

// function thirdFn() {
//   console.log("THIRD");
// }

// function fourthFn() {
//   console.log("fourth fn start");
//   fifthFn();
//   console.log("fourth fn finish");
// }

// function fifthFn() {
//   console.log("FIFTH");
// }

// setTimeout(function(){
//     console.log("timeout");
// },0)
// thirdFn();
// fifthFn();

// function takesForever() {
//   for (let i = 0; i < 75000; i++) {
//     console.log("loop");
//   }
// }

// function first() {
//   console.log("first");
// }
// function second() {
//   console.log("second");
//   third();
// }
// function third() {
//   console.log("third");
// }

// setTimeout(first, 1500);
// setTimeout(second, 1000);
// takesForever();

//  === Synchronous Execution vs. Async Execution ===

// Ex. SYNCHRONOUS

// console.log("one");
// console.log("two");
// console.log("three");
// for (let i=0; i< 50000;i++){
//     console.log("looping");
// }
// console.log("four");
// console.log("five");

// First Ex. ASYNCHRONOUS

// console.log("one");
// setTimeout(function () {
//   console.log("two");
// }, 10);
// console.log("three");

// Second Ex. ASYNCHRONOUS

// const todosList = document.querySelector("#todos-list");

// function renderTodos(todos) {
//   const todoHTML = todos.map((todo) => {
//     const newItem = document.createElement("li");
//     newItem.innerText = `Task: ${todo.title} Status: ${todo.completed}`;
//     return newItem;
//   });
//   todosList.replaceChildren(...todoHTML);
// }

// let todos;

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     todos = json;
//     renderTodos(json);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("other stuff is happening");

// console.log(todos);

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await response.json();
  return json;
}

async function init() {
  const todos = await getTodos();
  console.log(todos);
}

init();
