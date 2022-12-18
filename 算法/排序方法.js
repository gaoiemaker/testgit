const arr = [2, 4, 7, 3, 6, 4, 5];

// 冒泡排序 时间复杂度 n^2 空间复杂度 1
const popSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // 交换位置
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};
// 选择排序  空间复杂度 1 时间复杂度 n^2

const selectSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};
// 插入排序 时间复杂度 n^2

const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    // let temp = arr[i];
    let j = i;
    while (j > 0) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        break;
      }
      j--;
    }
  }
  return arr;
};

// 归并排序

const mergeSort = (arr) => {
  if (arr.length == 1) {
    return arr;
  }

  const mid = arr.length >> 1;

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const orderLeft = mergeSort(left);
  const orderRight = mergeSort(right);
  const res = [];
  while (orderLeft.length || orderRight.length) {
    if (orderLeft.length && orderRight.length) {
      res.push(
        orderLeft[0] > orderRight[0] ? orderRight.shift() : orderLeft.shift()
      );
    } else if (orderLeft.length) {
      res.push(orderLeft.shift());
    } else {
      res.push(orderRight.shift());
    }
  }
  return res;
};


// 快速排序

const quckSort = (arr) => {
  if (arr.length == 1) {
    return arr;
  }

  const mid = arr[0];

  const leftArr = [];
  const rightArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= mid) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quckSort(leftArr), mid, ...quckSort(rightArr)];
};

console.log(quckSort(arr));
