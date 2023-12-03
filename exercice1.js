//this function prints all prime numbers
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
//this function tests if a number is prime
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

printAllPrimes(100);// time taken for N=100
printAllPrimes(500);// time taken for N=500
printAllPrimes(1000);// time taken for N=1000
