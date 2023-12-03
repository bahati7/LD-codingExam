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