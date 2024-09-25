console.log("hello world");
const myArray = [8, 2, 5, 7];
n = myArray.length;

console.log(myArray);
for (let i = 0; i < n - 1; i++) {
  let swapped = 0; //ata mathai dokchena
  for (let j = 0; j < n - 1 - i; j++) {
    if (myArray[j] > myArray[j + 1]) {
      [myArray[j + 1], myArray[j]] = [myArray[j], myArray[j + 1]];
      swapped = 1; //swapper value changing t clear hossena
    }
    console.log("inner loop S = ", swapped);
  }
  console.log("outer loop S = ", swapped);
  console.log("outer i = ",i);
  // if (swapped == 0) {
  //   break;
  // }
}
console.log(myArray);

/*
Summary of swapped:

    Initial value (per outer loop pass): 0 — no swaps yet.
    After a swap (in the inner loop): 1 — a swap has occurred, meaning the array may still need sorting.
    If no swap occurs during the whole inner loop: 0 — array is already sorted, so the loop breaks early.

    const myArray = [8, 2, 5, 7]; // Initial array
    // Pass 1: Swaps occur, so swapped = 1
    // Pass 2: Further swaps occur, so swapped = 1
    // Pass 3: No swaps occur, so swapped = 0 (Array is now sorted, loop breaks)
*/
