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

// 正序遍历 现左后右
  const preOrder = (root)=>{
    if(!root){
        return;
    }
    console.log(root.val);
    preOrder(root.left)
    preOrder(root.right)
  }
//   preOrder(bt)

  // 中序遍历 先下后上
  const midOrder = (root)=>{
    if(!root){
        return;
    }
    preOrder(root.left)
    console.log(root.val);
    preOrder(root.right)
  }
//   midOrder(bt)
// 后序遍历 先右后左
  const nextOrder = (root)=>{
    if(!root){
        return;
    }
    preOrder(root.left)
    preOrder(root.right)
    console.log(root.val);
  }
  nextOrder(bt)