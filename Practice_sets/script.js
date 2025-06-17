// setTimeout(function james(){
//     console.log("Timer");

// },400);

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// })



// console.log("start")

// setTimeout(function cbT(){
//     console.log("CV setTimeout")
// },5000)

// fetch("http://localhost/html_and_css/task_9/").then(function cbF(){
//     console.log("CB Netflix");
// });

// console.log("END")




// let text = document.getElementById("divA").textContent;
// // The text variable is now: 'This is some text!'

// let test = document.getElementById("divA").innerHTML;

// document.getElementById("divA").textContent = "This text is different!";
// // The HTML for divA is now:
// // <div id="divA">This text is different!</div>
// console.log(text)
// console.log(test)


// const myFunc =  async() =>{
//     console.log("hello")
// }

// console.log(myFunc())


// document.getElementById("outer").addEventListener("click", () => {
//     console.log("Outer Div Clicked");
//   },true);
  
//   document.getElementById("inner").addEventListener("click", () => {
//     console.log("Inner Div Clicked");
//   });
  
//   document.getElementById("btn").addEventListener("click", (e) => {
//     console.log("Button Clicked");

   
//   });

//   document.body.addEventListener("click",() => {
//     console.log("body Clicked");})



//  let str = 'tHE qUICK bROWN fOX';
//  const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const LOWER = 'abcdefghijklmnopqrstuvwxyz';
//  let result= [];
//  for(let i = 0; i<str.length;i++){

//   if(UPPER.indexOf(str[i]) == -1){
//     result.push(str[i].toUpperCase());
//   }

//    else if(LOWER.indexOf(str[i]) == -1){
//      result.push(str[i].toLowerCase());
//   }

//   else{
//      result.push(str[i]);
//   }
//  }



// Declare and initialize the original array
// const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// // Initialize variables to track the most frequent item, its frequency, and the current item's frequency
// let mf = 1;
// let m = 0;
// let item;

// // Iterate through the array to find the most frequent item
// for (let i = 0; i < arr1.length; i++) {
//     // Nested loop to compare the current item with others in the array
//     for (let j = i; j < arr1.length; j++) {
//         // Check if the current item matches with another item in the array
//         if (arr1[i] == arr1[j])
//             m++;
//         // Update the most frequent item and its frequency if the current item's frequency is higher
//         if (mf < m) {
//             mf = m;
//             item = arr1[i];
//         }
//     }
//     // Reset the current item's frequency for the next iteration
//     m = 0;
// }

// // Output the most frequent item and its frequency
// console.log(item + " ( " + mf + " times ) ");




// Declare and initialize a sample 2-D array
// const a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7]
// ];
// // Iterate through each row in the 2-D array
// for (const i in a) {
//   // Output the current row index
//   console.log(`row ${i}`);
//   // Iterate through each element in the current row
//   for (const j in a[i]) {
//     // Output the current element value
//     console.log(` ${a[i][j]}`);
//   }
// }

// Async clarity 
const sayHitesh = function (str){
  console.log(str, Date.now());
}

let StopInt
const interStart = function (){
if(!StopInt){
  StopInt = setInterval(sayHitesh,1000,"Hi I LOVE BHUMI")
}
}

const interStop = function(){
clearInterval(StopInt)
StopInt = null;
}

document.querySelector("#start").addEventListener('click',interStart)
document.querySelector("#btn").addEventListener('click',interStop)



// Source: https://bit.ly/3hEZdCl
// Remove duplicates from a JavaScript array using the Set data structure
// Define an array 'nums' with duplicate elements
const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];

// Create a new Set from the array to automatically remove duplicates
const uniqueNumsSet = new Set(nums);

// Convert the Set back to an array using the spread operator
const uniqueNumsArray = [...uniqueNumsSet];

// Output the array with duplicates removed
console.log(uniqueNumsArray);
