const str = "ADOBECODEBANC";
const target = "ABC";

const minStr = (str, target) => {
  // 构建map

  const needMap = new Map();

  for (const i of target) {
    needMap.set(i, needMap.get(i) ? needMap.get(i) + 1 : 1);
  }

  let right = 0;
  let left = 0;

  let needLength = needMap.size;

  let res = "";
  // 移动右指针
  while (right < str.length) {
    const ritem = str[right]; // 右指针指定的字符
    if (needMap.has(ritem)) {
      // 字典中有这个字符的话
      needMap.set(ritem, needMap.get(ritem) - 1);
      // 如果当前的字符数量为0
      if (needMap.get(ritem) === 0) {
        needLength--;
      }
    }
    while (needLength === 0) {
      // 所有需要的字符都出现后的时候
      const newRes = str.slice(left, right + 1);
      if (!res || res.length > newRes.length) {
        res = newRes;
      }
      const litem = str[left]; // 左侧指针指定的元素
      if (needMap.has(litem)) {
        // 如果存在的话 就加到需求对象找那个 这样就可以继续向下找
        needMap.set(litem, needMap.get(litem) + 1);
        needMap.get(litem) == 1 ? needLength++ : needLength;
      }
      left++;
    }
    right++;
  }
  return res;
};

const minStr2 = (str, target) => {
  // 双指针的思路进行内的集合遍历

  const needMap = new Map();
  // 构建集合
  for (const a of target) {
    needMap.set(a, needMap.get(a) ? needMap.get(a) + 1 : 1);
  }
  let left = 0; // 左指针
  let right = 0; // 右指针
  let len = needMap.size;
  let res = "";
  while (right < str.length) {
    const c = str[right];
    if (needMap.has(c)) {
      // 需求集合中有这个元素的话 就删除一个数量的这个元素
      needMap.set(c, needMap.get(c) - 1);
      if (needMap.get(c) == 0) {
        len--;
      }
    }
    while (len === 0) {
      const d = str[left];
      const newRes = str.slice(left, right + 1);
      if (!res || res.length > newRes.length) {
        res = newRes;
      }
      if (needMap.has(d)) {
        needMap.set(d, needMap.get(d) + 1);
        if (needMap.get(d) == 1) {
          len++;
        }
      }
      left++;
    }
    right++;
  }
  console.log(res);
};
minStr(str, target);
minStr2(str, target);
