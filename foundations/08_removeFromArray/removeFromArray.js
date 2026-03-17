const removeFromArray = function (arr, ...toRemove) {
  removedArray = [];

  for (let j = 0; j < toRemove.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === toRemove[j]) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
