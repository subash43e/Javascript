let myVar = [7,34,53,4321];

let minVal = myVar[0];

for (let i = 0 ; i <= myVar.length; i++){
    if (myVar[i] < minVal) {
        minVal = myVar[i];
    }
}

console.log(minVal)