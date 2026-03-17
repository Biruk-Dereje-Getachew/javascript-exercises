const removeFromArray = function (arr, ...toRemove) {
  for (const itemToRemove of toRemove) {
    const indexRemove = arr.indexOf(itemToRemove);
    arr.splice(indexRemove, 1);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
