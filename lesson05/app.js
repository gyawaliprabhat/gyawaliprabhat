
window.onload=()=>{
    document.getElementsByTagName("span").innerHTML = showTime;
}
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

function isVowel(input) {
    const regExpression = /^[aeiou]$/;
    if (regExpression.test(input)) {
        return true;
    }
    return false;
}
function sumImperativeApproach(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

function multiplyImperativeApproach(arr) {
    let multiply = 1;
    for (const num of arr) {
        multiply *= num;
    }
    return multiply;
}

function reverse(str) {
    let charArr = Array.from(str);
    let n = str.length - 1;
    for (let i = 0; i < Math.floor(n/2); i++) {
        let temp = charArr[n-i];
        charArr[n-i]=charArr[i];
        charArr[i] = temp;
    }
    return charArr.join("");
}

function findLongestWord(strArr) {
    return strArr.reduce((x, y) => x.length > y.length ? x : y, "").length;
}

function filterLongWords(arrWords, i) {
    return arrWords.filter(x => x.length > i);
}

function computeSumOfSquares(arrNum) {
    return arrNum.map(x => x * x).reduce((x, y) => x + y, 0);
}

function printOddNumbersOnly(arrNum) {
    console.log(arrNum.filter(x => x % 2 == 1));
}

function computeSumOfSquaresOfEvensOnly(arrNum) {
    return arrNum.filter(x => x % 2 == 0).map(x => x * x).reduce((x, y) => x + y);
}

function sumFuncApporach(arr) {
    return arr.reduce((x, y) => x + y,0);
}
function multiplyFucnApproach(arr) {
    return arr.reduce((x, y) => x * y,1);
}

function findSecondBiggest(arrNum) {
    let firstBig = arrNum[0] > arrNum[1] ? arrNum[0] : arrNum[1];
    let secondBig = arrNum[0] > arrNum[1] ? arrNum[1] : arrNum[0];
    for (let i = 2; i < arrNum.length; i++) {
        if (secondBig < arrNum[i] && firstBig > arrNum[i]) {
            secondBig = arrNum[i];
        } else if (firstBig < arrNum[i]) {
            secondBig = firstBig;
            firstBig = arrNum[i];
        }
    }
    return secondBig;
}

function printFibo(n, a, b) {
    let fibSeries = [];
    if (n == 0) {
        return null;
    }
    if (n == 1) {
        fibSeries.push(a);
        return fibSeries;
    } else if (n == 2) {
        fibSeries.push(a);
        fibSeries.push(b);
        return fibSeries;
    } else {
        fibSeries.push(a);
        fibSeries.push(b);
        for (let i = 2; i < n; i++) {
            let c = a + b;
            a = b;
            b = c;
            fibSeries.push(c);
        }
    }
    return fibSeries;

}

function showTime(){
   new Date().toLocaleDateString();
   
}
