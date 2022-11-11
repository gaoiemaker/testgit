const instanceofCopy = (A,B)=>{
    // 创建指针
    let index = A;
    // 原型链的尽头是null 跳出循环
    while(index){
        if(B.prototype == index) return true;
        index = index.__proto__
    }
    return false;
}
const obj = new Object();
console.log(instanceofCopy([],Object));

// 翻转链表

const reverseList = (arrayList)=>{
    const p1 = arrayList;
    const p2 = null;
    while(p1){
        let temp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = temp;
    }
    return p2;
}