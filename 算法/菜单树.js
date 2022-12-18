const data = [
  {
    id: "1",
    name: "1",
    fatherId: "0",
  },
  {
    id: "2",
    name: "1-1",
    fatherId: "1",
  },
  {
    id: "3",
    name: "1-2",
    fatherId: "1",
  },
  {
    id: "4",
    name: "1-1-1",
    fatherId: "2",
  },
  {
    id: "5",
    name: "1-1-2",
    fatherId: "2",
  },
  {
    id: "6",
    name: "2",
    fatherId: "0",
  },
  {
    id: "7",
    name: "1-2-1",
    fatherId: "3",
  },
];
// 数组的方式
let map = [];
data.forEach((item,index)=>{
    map.push(item.id)
})
let res = [];
data.forEach((item,index)=>{
    let pid = item.fatherId;
    if(pid>0){
        (data[pid-1].children || (data[pid-1].children = [])).push(item)
    }else{
       res.push(item) 
    }
})
// 对象的方式

let res2 = [];
let mapObj = {};
data.forEach((item,index)=>{
    mapObj[item.id] = item
});

data.forEach((item,index)=>{
    let pNode = mapObj[item.fatherId];
    if(pNode){
        (pNode.children || (pNode.children = [])).push(item)
    }else{
        res2.push(item)
    }
})

console.log(res2);