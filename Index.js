const myArray = [3, 7, 9, 12, 11];
const n = myArray.length;

for (let i = 0; i < n - 1; i++) {
  let swapped = false;
  for (let j = 0; j < n - i - 1; j++) {
    if (myArray[j] > myArray[j + 1]) {
      const temp = myArray[j];
      myArray[j] = myArray[j + 1];
      myArray[j + 1] = temp;
      swapped = true;
    }
  }
  if (!swapped) {
    break;
  }
}

console.log("Sorted array:", myArray);
