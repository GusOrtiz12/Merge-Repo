var averge = (arr) => {
    let total = 0;
    for(num in arr){
        total += arr[num]
    }
    let sum = total / arr.length;
    console.log(sum);
}

const first = [3,5,5];
const second = [1,2];
const third = [4, 3, 0, 4, 5, 8];

averge(first);
averge(second);
averge(third);
