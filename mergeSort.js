function _merge(left, right) {
  let res = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      res.push(right.shift());
    } else {
      res.push(left.shift());
    }
  }
  if (left.length > 0) {
    res = res.concat(left);
  } else if (right.length > 0) {
    res = res.concat(right);
  }

  return res;
}

function mergeSort(arr) {}

module.exports = mergeSort;
