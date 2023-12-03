//create sliceFinder function
function sliceFinder(A,S){
    let countNum = 0;
    let sumNum = 0;
    let leftNum = 0;
    for(let rightNum = 0;rightNum<A.lenght;rightNum++){
        sum += A[rightNum];
        while(sumNum>S){
            sumNum -= A[leftNum];
            leftNum++;
        }
        if(sumNum === S) {
            countNum++;
        }
    }
    return countNum;
}
const sizes=[10,100,1000];
const S=100;

for(const size of sizes){
    const A=generateRandomArray(size,1,100);
    const startTime=performance.now();
    const count = sliceFinder(A,S);
    const endTime = performance.now();
    console.log(`N = ${size}, Time taken: ${endTime - startTime} ms, Count: ${count}`);

}