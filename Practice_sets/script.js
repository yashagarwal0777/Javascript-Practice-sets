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


document.getElementById("outer").addEventListener("click", () => {
    console.log("Outer Div Clicked");
  },true);
  
  document.getElementById("inner").addEventListener("click", () => {
    console.log("Inner Div Clicked");
  });
  
  document.getElementById("btn").addEventListener("click", (e) => {
    console.log("Button Clicked");

   
  });

  document.body.addEventListener("click",() => {
    console.log("body Clicked");})