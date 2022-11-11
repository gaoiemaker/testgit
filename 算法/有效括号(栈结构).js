const test = '{[()]}[]';

const isvoid = (str)=>{
    const arr = str.split('');
    const stack = [];
    arr.forEach(item=>{
        if(item == '(' || item == '{' || item == '['){
            stack.push(item)
        }else{
            const top = stack[stack.length -1];
            if(top ==='(' && item === ')' || top === '{' && item === '}' || top === '[' && item === ']'  ){
                stack.pop()
            }
        }

    })
    return stack.length == 0
}
console.log(isvoid(test));

// 配合Map使用

const isVoid = (str)=>{
    const arr = str.split('');
    const stack = [];
    let result = true;
    const map = new Map();
    map.set('(',')');
    map.set('[',']');
    map.set('{','}');
    arr.forEach(item=>{
        if(item === '(' || item === '[' || item === '{'){
            stack.push(item)
        }else{
            // 拿到栈顶
            const top = stack[stack.length -1];
            if( map.get(top) === item ){
                stack.pop() 
            }else{
                return;
            }
        }
    })
    return stack.length == 0;

}
console.log(isVoid(test));