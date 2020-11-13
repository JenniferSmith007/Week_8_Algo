//Target-Sum
const targetSumExistsInTwoNumbers = (list, target) => {
  
  for (let i = 0; i < list.length; i++){
    for (let j = i + 1; j < list.length; j++){
      if (list[i] + list[j] === target) {
        return true
      }
    }
  }
  return false
}

//Balanced-parens

const parensAreBalanced = (str) => {
  let stack = [];
  let map = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
          stack.push(str[i]);
      }
      else {
          let last = stack.pop();
          if (str[i] !== map[last]) {
              return false
          };
      }
  }
      if (stack.length !== 0) {
          return false
      };
  return true;
};

// add-eventing 

const addEventing = function (obj) {
  let events = {}
  obj.on = (eventName, fn) => {
    if (events[eventName]) {
      events[eventName].push(fn)
    } else {
      events[eventName] = [fn]
    }
  }
  obj.trigger = (eventName, ...args) => {
    events[eventName].forEach(fn => fn(...args))
  }
  return obj
}


