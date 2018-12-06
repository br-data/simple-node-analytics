// Merge two objects, similar to Object.assign()
export const merge = (obj1, obj2) => {
  var result = {};

  Object.keys(obj1).forEach(key => {
    result[key] = obj1[key];
  });

  Object.keys(obj2).forEach(key => {
    result[key] = obj2[key];
  });

  return result;
};

// Does nothing
export const noop = () => {};

// Allows function execution only every x milliseconds
// https://davidwalsh.name/javascript-debounce-function
export const debounce = (func, delay) => {
  var timer = null;

  return function() {
    var context = this;
    var args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

// Makes a function only executable once
export const once = func => {
  var executed = false;

  return function() {
    if (!executed) {
      executed = true;
      return func.apply(this, arguments);
    }
  };
};

// Get device width
export const getWidth = () => {
  return parseInt(window.innerWidth > 0 ? window.innerWidth : screen.width);
};

// Generates a unique ID (good, but not RFC compliant)
// https://gist.github.com/gordonbrander/2230317
export const uuid = () => {
  return Math.random()
    .toString(36)
    .slice(2);
};
