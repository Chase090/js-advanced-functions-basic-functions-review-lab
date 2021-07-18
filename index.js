// Your code here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(p = '*') {
    return function(adjective) {
        return `You are ${p}${adjective}${p}!`

    };
};

const Calculator = {
 multiply: function(num1, num2) { return num1 * num2},
 divide: function(num1, num2) { return num1 / num2},
 add: function(num1, num2) { return num1 + num2},
 subtract: function(num1, num2) { return num1 - num2},

};

let actionApplyer = function (start, ray) {
    let a = start;
  
    for (let i = 0; i < ray.length; i++) {
      a = ray[i](a);
    }
  
    return a;
  };