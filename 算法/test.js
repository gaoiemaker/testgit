const str = "ADOBECODEBANC";
const target = "ABC";

const minStr = (str, target) => {
  //   let res = "";
  //   const needMap = new Map();

  //   for (let i in target) {
  //     needMap.set(i, needMap.get(i) ? needMap.get(i) + 1 : 1);
  //   }

  //   // 封装好了需求集合之后  进行双指针的遍历去再集合str 中找到需求集合中的元素就可以了
  //   let left = 0;
  //   let right = 0;
  //   let needLength = needMap.size;
  // 构建map

  const needMap = new Map();

  for (const i of target) {
    needMap.set(i, needMap.get(i) ? needMap.get(i) + 1 : 1);
  }
  // 双指针遍历的方式进行查找
  let right = 0;
  let left = 0;

  let needLength = needMap.size;

  let res = "";
  while (right < str.length) {
    console.log(111);
    // let ritem = str[right];
    // if(needMap.has(ritem)){
    //     needMap.set(ritem,needMap.get(ritem) - 1)
    //     if(needMap.get(ritem) == 0){
    //         needLength--;
    //     }
    // }
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

// console.log(minStr(str, target));

Array.prototype.flatCopy = function (deep) {
  let res = []
  arr = this;
  while (deep>=1) {
    res = []
    arr.forEach((item,index)=>{
      if(Array.isArray(item)){
        res = res.concat(item);
        deep--;
      }else{
        res.push(item)
      }
    })
    arr = res
  }
  
  return res;
};

let arr = [1,2,3,4,[[5]]]
let newres =  arr.flatCopy(1)
console.log(newres);
