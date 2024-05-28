let scr=document.getElementsByClassName('screen')[0];
let clear=document.querySelector('.double')
let list=[]
let state=false
let button_2=document.getElementsByClassName("button")[1]
let button_3=document.getElementsByClassName("button")[2]
let button_4=document.getElementsByClassName("button")[3]
let button_5=document.getElementsByClassName("button")[4]
let button_6=document.getElementsByClassName("button")[5]
let button_7=document.getElementsByClassName("button")[6]
let button_8=document.getElementsByClassName("button")[7]
let button_9=document.getElementsByClassName("button")[8]
let button_10=document.getElementsByClassName("button")[9]
let button_11=document.getElementsByClassName("button")[10]
let button_12=document.getElementsByClassName("button")[11]
let button_13=document.getElementsByClassName("button")[12]
let button_14=document.getElementsByClassName("button")[13]
let button_15=document.getElementsByClassName("button")[14]
let button_16=document.getElementsByClassName("button")[15]
let button_17=document.getElementsByClassName("button")[16]
let lastInputWasOperator = false;



function appendDigit(digit) {
    var currentValue = scr.textContent;
    
    if (currentValue === "0") {
        scr.textContent = digit;
    } else {
        scr.textContent += digit;
    }
    lastInputWasOperator = false; // Reset the state
}


function appendOperator(operator) {
    lastInputWasOperator=false
    if (lastInputWasOperator == true) {
        // Ignore this operator, as the last input was also an operator
        return;
    }

    scr.textContent += operator;
    lastInputWasOperator = true; // Update the state
}







clear.addEventListener('click',function(){
    state=false
    scr.textContent=0
    // console.log('working');
})
function checkState(value) {
    if (scr.textContent==0 ) {
        scr.textContent+=value
    }else{
        
        console.log('helo');
    }
}
// remove one digit
function removeLastDigit() {
    var currentValue = scr.textContent;
    
    if (currentValue.length > 1) {
        // Remove the last character
        scr.textContent = currentValue.slice(0, -1);
    } else {
        // If there's only one character left, reset it to "0"
        scr.textContent = "0";
    }
    appendOperator('')
}
// 7
button_4.addEventListener('click',function(){
    appendDigit(this.innerText)
    // scr.textContent+=this.innerText
})

// ÷ operator
button_3.addEventListener('click',function () {
    appendOperator(this.innerText)
    
})

// remove one by one
button_2.addEventListener('click',function () {
    removeLastDigit()
})
// 8
button_5.addEventListener('click',function () {
appendDigit(this.innerText)
})

// 9
button_6.addEventListener('click',function () {
    appendDigit(this.innerText)
})

// multiply X
button_7.addEventListener('click',function () {
    appendOperator(this.innerText)
})
//4
button_8.addEventListener('click',function () {
    appendDigit(this.innerText)
})

//5
button_9.addEventListener('click',function () {
    appendDigit(this.innerText)
})

//6 
button_10.addEventListener('click',function () {
    appendDigit(this.innerText)
})
 // - operator
 button_11.addEventListener('click',function () {
    appendOperator(this.innerText)
 })
 //1
 button_12.addEventListener('click',function () {
    appendDigit(this.innerText)
 })

 //2
 button_13.addEventListener('click',function () {
    appendDigit(this.innerText)
 })
 //3
 button_14.addEventListener('click',function () {
    appendDigit(this.innerText)
 })
 // + operator
 button_15.addEventListener('click',function () {
    appendOperator(this.innerText)
 })

 // 0
 button_16.addEventListener('click',function () {
    appendDigit(this.innerText)
 })
 // = operator
 button_17.addEventListener('click',function () {
   calculateResult()
 })

 function calculateResult() {
    var currentValue = scr.textContent;
    var numbers = currentValue.split(/\+|\-|\×|\÷/g); // Split by operators to get numbers
    var operators = currentValue.replace(/[0-9]|\./g, "").split(""); // Replace numbers and decimal point to get operators

    if (numbers.length < 2 || operators.length < 1) {
        // There are not enough operands or operators, do nothing
        return;
    }

    var result = parseFloat(numbers[0]);

    for (var i = 0; i < operators.length; i++) {
        var number = parseFloat(numbers[i + 1]);
        var operator = operators[i];

        switch (operator) {
            case "+":
                result += number;
                break;
            case "-":
                result -= number;
                break;
            case "×":
                result *= number;
                break;
            case "÷":
                if (number != 0) {
                    result /= number;
                } else {
                    scr.textContent = "Error";
                    return;
                }
                break;
        }
    }

    scr.textContent = result.toString();
}
