function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(work = 'go to the office') {
  return `This Monday, I will ${work}.`;
};

function wrapAdjective(flair = '*') {
  return function(adj = 'special') {
    return `You are ${flair}${adj}${flair}!`;
  };
}

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function actionApplyer(int, functions) {
  let ans = int;
  functions.forEach(func => {
    ans = func(ans);
  });
  return ans;
}
