function fibonacci(num) {
    if(num === 0){
        return 0;
    }else if(num === 1){
        return 1;
    }else{
        let feb  [0,1];
    
        for(let i=2; i<=num; i++){
            feb[i] = feb[i-1] + feb[i-2];
        }
        return feb[num];
    }
}

module.exports = fibonacci;
