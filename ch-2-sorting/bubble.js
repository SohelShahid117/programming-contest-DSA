console.log("hello world")
const myArray = [7,-1,15,3,-8]
const n = myArray.length
console.log(n)
console.log("before bubble sort : ",myArray)

for(let i=0;i<n-1;i++){
    for( let j=0;j<n-1-i;j++){
        // console.log("Number i = ",i,"Loop j = ",j);
        if(myArray[j]>myArray[j+1]){
            // myArray[j+1] = myArray[j]
            let temp = myArray[j]
            myArray[j]=myArray[j+1]
            myArray[j+1] = temp
        }
    }
}

console.log("after bubble sort : ",myArray)