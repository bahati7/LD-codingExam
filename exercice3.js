//create sliceFinder function
function sliceFinder(A, S) {
    let countNum = 0;
    let sumNum = 0;
    let leftNum = 0;
    const validSlices = [];
  
    for (let rightNum = 0; rightNum < A.length; rightNum++) {
      sumNum += A[rightNum];
  
      while (sumNum > S) {
        sumNum -= A[leftNum];
        leftNum++;
      }
  
      if (sumNum === S) {
        countNum++;
        validSlices.push(A.slice(leftNum, rightNum + 1)); // Add slice to results
      }
    }
  
    return{
      countNum,validSlices,

    } ;
  }
  
  const sizes = [10, 100, 1000];
const S = 100;

for (const size of sizes) {
  const A = randomArray(size, 1, 100);

  const startTime = performance.now();
  const { countNum, validSlices } = sliceFinder(A, S);
  const endTime = performance.now();

  console.log(`N = ${size}, Time taken: ${endTime - startTime} ms, Count: ${countNum}`);
  console.log(`Valid slices:`);
  console.log(validSlices);
}

//testing example in the exercice
const tab=[ 2, 4, 3 , 2, 1, 1, 5, 7];
const SS=7;
const startTime = performance.now();
const { countNum, validSlices } = sliceFinder(tab, SS);
const endTime = performance.now();
console.log(`N = ${tab.length}, Time taken: ${endTime - startTime} ms, Count: ${countNum}`);
console.log(`Valid slices:`);
console.log(validSlices);


//random array
function randomArray(size, min, max) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return array;
}
