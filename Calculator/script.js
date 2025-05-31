const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for(let i = 0; i < buttonsEl.length; i++){

    // read about eventlistners
    buttonsEl[i].addEventListener("click", () => 
        {
            // something to read about .textContent
        const buttonValue = buttonsEl[i].textContent;
        // condition for calling value
        if(buttonValue === "C"){
            clearResult();
        }
        else if(buttonValue === "="){
            calculateResult();
        }
        else {
            appendValue(buttonValue);
        }
        
    })
}


function clearResult(){
    inputFieldEl.value = "";
}

function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue){
     inputFieldEl.value += buttonValue;
}
