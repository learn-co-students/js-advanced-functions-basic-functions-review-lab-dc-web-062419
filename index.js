// Your code here
function saturdayFun(arg = 'roller-skate'){
   return `This Saturday, I want to ${arg}!`
}



function mondayWork(arg = "go to the office"){
    return `This Monday, I will ${arg}.`
}

function wrapAdjective(out = '*'){

    return function(arg = 'special'){
            return `You are ${out}${arg}${out}!`
    }
}

const Calculator = {add, subtract, multiply, divide}

function add(a, b){
    return a + b
}
function subtract(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function divide(a, b){
    return a/b
}

function actionApplyer(int, arr){
    
   if (arr.length === 0){
    return int
   }
   else{
     for(let i = 0; i < arr.length; i++){
         int = arr[i](int)
     }
     return int
   }
}