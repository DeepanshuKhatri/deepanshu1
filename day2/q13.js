// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
// The following rules define a valid string:
// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

function solve(s) {
    let stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
  
      if (char === '(' || char === '*') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length === 0) {
          return false;
        }
  
        if (stack[stack.length - 1] === '(') {
          stack.pop();
        } else if (stack[stack.length - 1] === '*') {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  
    let count = 0;
  
    while (stack.length > 0) {
      const char = stack.pop();
  
      if (char === '(') {
        count++;
      } else if (char === '*') {
        if (count > 0) {
          count--;
        }
      } else {
        return false;
      }
    }
  
    return count === 0;
}

let s = "(*)"
console.log(solve(s))
