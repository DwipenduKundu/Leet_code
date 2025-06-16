/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // promise1=new Promise((res,rej)=>{
    //     setTimeout(()=>{res(5)},20)
    // })
    // promise2=new Promise((res,rej)=>{
    //     setTimeout(()=>{res(5)},60)
    // })
    let [prom1,prom2] =await Promise.all([promise1,promise2])
    return prom1+prom2;
};
// addTwoPromises
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     return err.message
// })

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */