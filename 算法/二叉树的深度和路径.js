const bt = {
  val: 8,
  left: {
    val: 5,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
  right: {
    val: 10,
    left: {
      val: 9,
      left: null,
      right: null,
    },
    right: {
      val: 12,
      left: null,
      right: null,
    },
  },
};

const deepTree = (root) => {
  if (!root) {
    return 0;
  }
  const leftDeep = deepTree(root.left) + 1;
  const rightDeep = deepTree(root.right) + 1;

  return Math.max(leftDeep, rightDeep);
};
console.log(deepTree(bt));

// 路径树
const streetTree = (root) => {
  if (!root) {
    return [];
  }
  const res = [];
  const finPath = (curTree, curPath) => {
    if (!curTree.left && !curTree.right) {
      res.push(curPath);
    }
    if (curTree.left) {
      finPath(curTree.left, `${curPath}=>${curTree.left.val}`);
    }
    if (curTree.right) {
      finPath(curTree.right, `${curPath}=>${curTree.right.val}`);
    }
  };
  finPath(root, root.val);
  return res;
};
console.log(JSON.stringify(streetTree(bt)));

// 层级遍历

const levalOrder = (root) => {
  const stack = [root];
  const res = [];
  while (stack.length) {
    let len = stack.length;
    res.push([]);
    // let target = '';
    while (len--) {
      target = stack.shift();
      res[res.length - 1].push(target.val);
      if (target.left) {
        stack.push(target.left);
      }
      if (target.right) {
        stack.push(target.right);
      }
    }
  }
  console.log(res);
};

levalOrder(bt);

const levalOrder2 = (root) => {
  const stack = [root];
  let res = [];
  while (stack.length) {
    res.push([]);
    let len = stack.length;
    while (len--) {
      let target = stack.shift();
      res[res.length - 1].push(target.val);
      if (target.left) {
        stack.push(target.left);
      } 
     if(target.right) {
        stack.push(target.right);
      }
    }
  }
  return res;
};
console.log(levalOrder2(bt));
