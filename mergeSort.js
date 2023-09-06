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

function mergeSort(arr) {
  if (arr.length == 0) {
    return [];
  } else if (arr.length == 1) {
    return arr;
  }

  let midPoint = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midPoint);
  let rightArr = arr.slice(midPoint, arr.length);

  if (leftArr.length == 1 && rightArr.length == 1) {
    return _merge(leftArr, rightArr);
  } else if (leftArr.length == 1 && rightArr.length > 1) {
    return _merge(leftArr, mergeSort(rightArr));
  } else if (rightArr.length == 1 && leftArr.length > 1) {
    return _merge(mergeSort(leftArr), rightArr);
  } else {
    return _merge(mergeSort(leftArr), mergeSort(rightArr));
  }
}

mergeSort([1, 2, 3, 4, 5, 6]);

module.exports = mergeSort;
