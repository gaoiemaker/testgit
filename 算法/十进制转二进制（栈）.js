
const desc = 2;

const desctodoub = (desc)=>{
    let res = ''
    const strack = [];
    while(desc > 0){
        strack.push(desc%2)
        desc = desc >> 1
    }
    while(strack.length>0){
        res += strack.pop();
    }
    return res;
}
console.log(desctodoub(desc));

const numToDoub = (num)=>{
    const strack = [];
    while(num > 0){
        strack.unshift(num % 2);
        num = num >> 1
    }
    return strack.join('');
}

console.log(numToDoub(13274))