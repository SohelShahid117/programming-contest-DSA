let my_array = [88,21,7, 3, 9, 12, 11];
console.log(my_array)

let n = my_array.length

for(let i = 0;i<n-1;i++){
    let swapped = false;
    console.log(swapped)
    console.log("outer i = ",i);
    for(let j = 0;j<n-1-i;j++){
        if(my_array[j]>my_array[j+1]){
            let temp = my_array[j];
            my_array[j]=my_array[j+1];
            my_array[j+1]=temp;
            swapped=true;
        }
        // console.log("inner loop swapped is : ",swapped);
    }
    console.log("outer lp swapped is : ",swapped);
    if(!swapped){
        break;
    }
}
console.log(my_array);
