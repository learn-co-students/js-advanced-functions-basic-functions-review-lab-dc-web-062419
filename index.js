function saturdayFun(arg = 'roller-skate'){
    return `This Saturday, I want to ${arg}!`
}

const mondayWork = function(arg = 'go to the office'){
    return `This Monday, I will ${arg}.`
}

function wrapAdjective(string = "*"){
    return function(arg = "special") {
        return `You are ${string}${arg}${string}!`
    }
}

let Calculator = {
   add: function(a,b){
       return a+b
   },
   subtract: function(a,b){
       return a-b
   },
   multiply: function(a,b){
       return a*b
   },
   divide: function(a,b){
       return a/b
   }
}

function actionApplyer(start, arrayOfFunc){
    let num = start 
    arrayOfFunc.forEach(function(elem){
        num = elem(num)
    })
    return num
}