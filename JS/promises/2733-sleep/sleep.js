/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let p1= new Promise(res=>{
        setTimeout(res,millis);
    })
    return p1;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
