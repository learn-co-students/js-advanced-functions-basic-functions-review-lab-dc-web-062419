// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
    return function(param="special") {
        return `You are ${string}${param}${string}!`
    }
}

let Calculator = {
    add: function() {
        return 1 + 3
    },

    subtract: function() {
        return 1 - 3
    },

    multiply: function() {
       return 1 * 3
    },

    divide: function() {
        return 10 / 5
    }

}
 
function actionApplyer(int, arrOfFunctions){
    let a = int
    if (arrOfFunctions.length < 1) {
        return int
    } else {
      for (let i = 0; i < arrOfFunctions.length; i++){
        a = arrOfFunctions[i](a)
      }
      return a
    }
}