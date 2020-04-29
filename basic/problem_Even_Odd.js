/*
Problem: input an array, split even and odd in two arrays
*/

let myNums = [1,2,3,4,5,6,7,8,9,10];
let myOddNums = [];
let myEvenNums = [];

for(let i=0; i<myNums.length; i++){
    if(myNums[i]%2==0){
        myEvenNums.push(myNums[i]);
    }else{
        myOddNums.push(myNums[i]);
    }
}
console.log(myOddNums);
console.log(myEvenNums);
