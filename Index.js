const myArray = [64, 34, 25, 12, 22, 11, 90, 5];
const n = myArray.length;


for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (myArray[j] > myArray[j + 1]) {
            const temp = myArray[j];
            myArray[j] = myArray[j + 1];
            myArray[j + 1] = temp;
        }
    }
}

console.log("Sorted array:", myArray);