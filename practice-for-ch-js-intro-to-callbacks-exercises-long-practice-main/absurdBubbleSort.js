const readline = require("readline");
const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const askIfGreaterThan = (el1,el2,callback) => {
    reader.question(`Is ${el1} greater than ${el2}?`, (answer) =>{
        if (answer === 'yes') {
            callback(true);
        }else {
            callback(false);
        };
        // console.log('hello')
    })
    
}

const innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i+1], (bool) => {
            if (bool === true) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                madeAnySwaps = true;
                // console.log('hello');
                innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
            }else {
                innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
            }
        })
    }else {
        outerBubbleSortLoop(arr, madeAnySwaps);
    }
}

const outerBubbleSortLoop = (arr, bool) => {
    if (bool === true) {
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }else {
        console.log(arr);
        reader.close();
    }
}


// askIfGreaterThan(1, 5, (bool) => console.log(bool));
innerBubbleSortLoop([1,3,2,100,12,11], 0, true, outerBubbleSortLoop);