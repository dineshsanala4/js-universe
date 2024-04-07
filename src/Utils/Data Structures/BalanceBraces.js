let checkValidString = (str) => {
  const stack = [];
  const stars = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(i);
    } else if (str[i] === "*") {
      stars.push(i);
    } else if (stack.length > 0) {
      stack.pop();
    } else if (stars.length > 0) {
      stars.pop();
    } else {
      return false;
    }
  }

  while (stack.length > 0 && stars.length > 0) {
    if (stack.pop() > stars.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

export default checkValidString;
