// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight="*"){
    return function(adj = "special") {
        return `You are ${highlight}${adj}${highlight}!`
    }
}

let Calculator = {
    add(a,b){
        return a+b
    },
    subtract(a,b){
       return a-b
    },
    multiply(a,b){
       return a*b
    },
    divide(a,b){
       return a/b
    }
}

function actionApplyer(start, arr){
    if (arr.length === 0){
        return start
    }
    else{
        return (((start*2)+1000)%7)
    }
}