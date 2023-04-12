const runTimeOut = async () => {
    try{
      const promise = await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })  
    }catch{
        promise.then (() => {console.log('Time out!')})
    }
        
};

runTimeOut();