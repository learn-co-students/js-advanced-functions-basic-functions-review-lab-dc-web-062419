function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity="go to the office"){
    return `This Monday, I will ${activity}.`
}


let wrapAdjective = function(stuff="*"){
    return function(adjective="special"){
        return `You are ${stuff}${adjective}${stuff}!`
    }

}

const Calculator = {
    add: function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a - b
    },
    multiply:  function(a,b){
        return a * b 
    },
    divide: function(a,b){
       return  a/b;
    }
}
const actionApplyer = function(start, arr){
    let a = start 
    for (let i = 0; i < arr.length; i++){
        a = arr[i](a)
    }
    return a 

}