
const handleNum = (num, even, odd) => num % 2 === 0 ? even() : odd();


function handleEven(){
    console.log("Number is even");
};

function handleOdd(){
    console.log("Number is odd");
};


handleNum(3, handleEven, handleOdd)