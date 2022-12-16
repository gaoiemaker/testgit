console.log(111);

let p = new Promise((resolve,reject)=>{
    console.log(222);
    resolve(555);
    console.log(333);
})

let fun = async()=>{
    p.then((v)=>{
        console.log(v);
    })
    console.log(666);
}
fun()
setTimeout(()=>{
    console.log(444);
})
