function printAllPrimes(N){
    const ourPrimes = [];
    const timeStart = new Date().getTime();

    for(let x=2;x<N;x++){
        if(primeTest(x)){
            ourPrimes.push(x);
        }
    }
    console.log(ourPrimes);
    const timeEnd = new Date().getTime();
    console.log('Time taken in milliseconds is:' + (timeEnd-timeStart));
}
function primeTest(number)    {
    if(number<=1){
        return false;
        
    }
    for (let x=2;x<number;x++){
        if(number % x == 0){
            return false;
        }
    }
    return true;
}
