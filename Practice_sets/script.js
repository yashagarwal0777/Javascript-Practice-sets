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
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Initialize variables to track the most frequent item, its frequency, and the current item's frequency
let mf = 1;
let m = 0;
let item;

// Iterate through the array to find the most frequent item
for (let i = 0; i < arr1.length; i++) {
    // Nested loop to compare the current item with others in the array
    for (let j = i; j < arr1.length; j++) {
        // Check if the current item matches with another item in the array
        if (arr1[i] == arr1[j])
            m++;
        // Update the most frequent item and its frequency if the current item's frequency is higher
        if (mf < m) {
            mf = m;
            item = arr1[i];
        }
    }
    // Reset the current item's frequency for the next iteration
    m = 0;
}

// Output the most frequent item and its frequency
console.log(item + " ( " + mf + " times ) ");
