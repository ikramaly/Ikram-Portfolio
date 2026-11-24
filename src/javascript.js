let promise = new Promise((resolve,reject)=>{
    console.log("hello");
});
console.log(promise)
// console.log()
function saveDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10 )+1;
        if(internetSpeed >5){
            resolve("Success : Data saved")
        }else{
            reject("Reject : Data rejected")
        }
    })
}
saveDB("Ikram Ali")
.then((res)=>{
    console.log("data successfully run : ",res)
})
.catch((err)=>{
    console.log("Data falied : ",err)
})