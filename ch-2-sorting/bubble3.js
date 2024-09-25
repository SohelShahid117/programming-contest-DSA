function bubbleSort(arr){
    console.log(arr)
    console.log(arr.length)
    for(let i =0;i<arr.length-1;i++){
        // console.log(arr[i])
        for(let j=0;j<arr.length-1-i;j++){
            // console.log(arr[i],arr[j])
            if(arr[j]>arr[j+1]){
                // [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }

        }
    }
    // console.log(arr)
    return arr;
}
// bubbleSort([4,1,-9,44,6])
console.log(bubbleSort([4,1,-9,44,6]));