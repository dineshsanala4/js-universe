let checkValidString = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  } else {
    return true;
  }
};

export default checkValidString;
