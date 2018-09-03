let total = 0;
let firstOperand = 0;
let SecondOperand = 0;
let currentNum = 0;
let operator = "";
function deleteCalc(){
    console.log("deleted");
    total = 0;
    firstOperand = 0;
    SecondOperand = 0;
    currentNum = 0;
    operator = "";
}

function add(){
    if(operator != ""){
        eq(operator);
    }
    operator = "+";
    firstOperand = currentNum;
    currentNum = 0;
}

function sub(){
    if(operator != ""){
        eq(operator);
    }
    operator = "-";
    firstOperand = currentNum;
    currentNum = 0;
}

function mul(){
    if(operator != ""){
        eq(operator);
    }
    operator = "*";
    firstOperand = currentNum;
    currentNum = 0;
}

function div(){
    if(operator != ""){
        eq(operator);
    }
    operator = "/";
    firstOperand = currentNum;
    currentNum = 0;
}

function eq(){
    SecondOperand = currentNum;
    switch(operator){
        case "*" : total = 1 * firstOperand * SecondOperand;
                    break;
        case "+" : total = 1 * firstOperand + SecondOperand;
                    break;
        case "-" : total = 1 * firstOperand - SecondOperand;
                    break;
        case "/" : total = 1 * firstOperand / SecondOperand;
                    break;
    }
    console.log(total);
    viewContent.value = ""+total;
    operator = "";
}

function pressed(num){
    if(num=="."){
        currentNum+=num;
    }else{
        if(currentNum == 0){
            currentNum = num;
        }else{
            currentNum = "" + currentNum + num;
        }
    }
    //console.log(currentNum);
    viewContent.value = currentNum;

}
