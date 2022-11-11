
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
console.log(4 >> 1);
