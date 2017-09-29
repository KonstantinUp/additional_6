module.exports = function zeros(expression) {
    const stringToMultiplyArray = expression.split('*');

    const resultToMultiply = stringToMultiplyArray.map(stringToMultiply => {
        const factorial = getFactorialFromString(stringToMultiply);

        return factorial.isDouble ?
            calculateDoubleFactorial(factorial) :
            calculateFactorial(factorial);
    });

    return calculateZiros(multiplyArray(resultToMultiply));
};

const calculateZiros = (number) => {
    const numberArray = number.split('');
    let result = 0;
    // console.log(numberArray);
    for(let i = numberArray.length - 1; i >= 0; i--) {
        if (numberArray[i] === '0'){
            result++;
        } else {
            return result;
        }
    }
};

const calculateFactorial = (factorial) => {
    let result = 1;
    for (let i = result + 1; i <= factorial.number; i++) {
        result = multiply(result, i);
    }
    return result;
};

const calculateDoubleFactorial = (factorial) => {
    const isFactorialNumberEven = isEven(factorial.number);
    let result = isFactorialNumberEven ? 2 : 1;
    for (let i = result + 1; i <= factorial.number; i++) {
        if (isFactorialNumberEven && isEven(i)) {
            result = multiply(result, i);
        } else if (!isFactorialNumberEven && !isEven(i)){
            result = multiply(result, i);
        }
    }
    return result;
};

const isEven = (number) => {
    return number % 2 === 0;
};

const multiplyArray = (array) => {
    return array.reduce((collector, number) => multiply(collector, number), 1);
};

const getFactorialFromString = (string) => {
    const number = '';
    const result = string.split('').reduce((collector, symbol) => {
        if (symbol === '!') {
            collector.factorial++;
        } else {
            collector.number = collector.number + symbol;
        }
        return collector;
    }, {
        number: '',
        factorial: 0
    });

    return {
        number: +result.number,
        isDouble: result.factorial > 1
    }
};

const multiply = (first, second) => {
    first = first + '';
    second = second + '';
    if (first.length < second.length) {
        let tmp = second;
        second = first;
        first = tmp;
    }

    let arr1 = first.split('');
    let arr2 = second.split('');
    let arr = [];
    let rlen = arr1.length + arr2.length;
    for (let k = 0; k < rlen; k++) {
        arr[k] = 0;
    }
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {

            arr[i + j + 1] += arr1[j] * arr2[i];
        }
    }

    for (let k = rlen - 1; k > 0; k--) {
        if (arr[k] >= 10) {
            arr[k - 1] += Math.floor(arr[k] / 10);
            arr[k] %= 10;
        }
    }

    if (arr[0] === 0) {
        delete arr[0];
    }


    return arr.join('');
};
