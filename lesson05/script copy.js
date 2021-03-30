
window.onload = () => {
    document.getElementsByTagName("span").innerHTML = showTime;
}
const answers = [
    {
        func: function max(num1, num2) {
            if (num1 > num2) {
                return num1;
            } else {
                return num2;
            }
        },
        question: "Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.",
        menu_name: "Max of Two Numbers"
    },

    {
        func: function maxOfThree(num1, num2, num3) {
            if (num1 > num2 && num1 > num3) {
                return num1;
            } else if (num2 > num3) {
                return num2;
            } else {
                return num3;
            }
        },
        question: "Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.",
        menu_name: "Max of Three Numbers"
    },

    {
        func: function isVowel(input) {
            const regExpression = /^[aeiou]$/;
            if (regExpression.test(input)) {
                return true;
            }
            return false;
        },
        question: "3.	Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.",
        menu_name: "Check Vowel"

    },
    {
        func: function sumImperativeApproach(arr) {
            let sum = 0;
            for (const num of arr) {
                sum += num;
            }
            return sum;
        },
        question:"Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)",
        menu_name:"Sum of Arrays of numbers"
    },
    {
        func: function multiplyImperativeApproach(arr) {
            let multiply = 1;
            for (const num of arr) {
                multiply *= num;
            }
            return multiply;
        },
        question:"Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)",
        menu_name:"Multiply of Arrays of numbers"
    },
    {
       func: function reverse(str) {
            let charArr = Array.from(str);
            let n = str.length - 1;
            for (let i = 0; i < Math.floor(n / 2); i++) {
                let temp = charArr[n - i];
                charArr[n - i] = charArr[i];
                charArr[i] = temp;
            }
            return charArr.join("");
        },
        question:"Define a function reverse() that computes the reversal of a string. For example, reverse(\"jag testar\") should return the string \"ratset gaj\".",
        menu_name: "Reverse of String"
    },
    {
      func:function  findLongestWord(strArr) {
            return strArr.reduce((x, y) => x.length > y.length ? x : y, "").length;
        },
        question:"Write a function findLongestWord() that takes an array of words and returns the length of the longest one.",
        menu_name:"Reverse of String"
    },

    {
       func: function filterLongWords(arrWords, i) {
            return arrWords.filter(x => x.length > i);
        },
        question:"Write a function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters.",
        menu_name: "Filter Long Words"
    },

    {
        computeSumOfSquares(arrNum) {
            return arrNum.map(x => x * x).reduce((x, y) => x + y, 0);
        }
    },

    {
        printOddNumbersOnly(arrNum) {
            console.log(arrNum.filter(x => x % 2 == 1));
        }
    },

    {
        computeSumOfSquaresOfEvensOnly(arrNum) {
            return arrNum.filter(x => x % 2 == 0).map(x => x * x).reduce((x, y) => x + y);
        }
    },

    {
        sumFuncApporach(arr) {
            return arr.reduce((x, y) => x + y, 0);
        }
    },

    {
        multiplyFucnApproach(arr) {
            return arr.reduce((x, y) => x * y, 1);
        }
    },

    {
        findSecondBiggest(arrNum) {
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
    },

    {
        printFibo(n, a, b) {
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
    },

    {
        showTime() {
            new Date().toLocaleDateString();

        }
    }
];