
const numbers = [2, -5, 0, 7, -3, 0, 10, -8];


function countOfNumbersInArray(nums){
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for (let num of nums){
        if (num < 0){
            negativeCount ++;
    
        }
        else if (num > 0){
            positiveCount ++;
    
        }
        else if (num === 0){
            zeroCount ++;
        }
    }

    return {
        positiveCount,
        negativeCount,
        zeroCount
    };
}

const result = countOfNumbersInArray(numbers);
console.log(result);