/*jshint esversion: 6 */

window.onload = () => {
    "use strict";
    let timer = null;
    const answers = {
         max(num1, num2) {
            if (num1 > num2) {
                return num1;
            } else {
                return num2;
            }
        }, 
        maxOfThree(num1, num2, num3) {
            let max = ((num1 < num2) ? num2 : num1);
            return ((max < num3) ? num3 : max);
        },
         isVowel(char) {
            const regExpression = /^[aeiou]$/;
            return regExpression.test(char);
        }, 
        sumImperativeApproach(arrNumbers) {
            let sum = 0;
            for (let num of arrNumbers) {
                sum += num;
            }
            return sum;
        }, 
        multiplyImperativeApproach(arrNumbers) {
            let multiply = 1;
            for (let num of arrNumbers) {
                multiply *= num;
            }
            return multiply;
        },
         reverse(str) {
            let charArr = [...str];
            let n = str.length - 1;
            for (let i = 0; i < Math.floor(n / 2); i++) {
                let temp = charArr[n - i];
                charArr[n - i] = charArr[i];
                charArr[i] = temp;
            }
            return charArr.join("");
        }, 
        findLongestWordLength(strArr) {
            return strArr.reduce((x, y) => x.length > y.length ? x : y, "").length;
        }, filterLongWords(arrWords, i) {
            return arrWords.filter(x => x.length > i);
        },
         computeSumOfSquares(arrNum) {
            return arrNum.map(x => x * x).reduce((x, y) => x + y, 0);
        }, 
        printOddNumbersOnly(arrNum) {
            return (arrNum.filter(x => x % 2 == 1));
        }, computeSumOfSquaresOfEvensOnly(arrNum) {
            return arrNum.filter(x => x % 2 == 0).map(x => x * x).reduce((x, y) => x + y);
        }, sumFuncApporach(arrNumbers) {
            return arrNumbers.reduce((x, y) => x + y, 0);
        }, multiplyFucnApproach(arrNumbers) {
            return arrNumbers.reduce((x, y) => x * y, 1);
        }, findSecondBiggest(arrNum) {
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
        }, printFibo(n, a, b) {
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

        }, showTime() {
            timer = setInterval(getCurrentTime, 500);
            function getCurrentTime() {
                let currentDate = new Date();
                let date = currentDate.getFullYear() + "-" + addZeroBefore(currentDate.getMonth() + 1) +
                    "-" + addZeroBefore(currentDate.getDay());
                let time = addZeroBefore(currentDate.getHours()) + "-" + addZeroBefore(currentDate.getMinutes())+ 
                    "-" + addZeroBefore(currentDate.getSeconds());
                console.log(date + " " + time);
                document.getElementById("output").value = date + " " + time;
            }
            function addZeroBefore(n) {
                return (n < 10 ? '0' : '') + n;
            }
        }
    };





    const menuSection = document.getElementById("menu-section");
    const code = document.getElementById("code");
    const btnRun = document.getElementById("run");
    const txtInput = document.getElementById("input");
    const txtOutput = document.getElementById("output");
    const hint = document.getElementById("hint");

    for (let key in answers) {
        let li = document.createElement("li");
        li.className = "nav-item btn";
        li.id = key;
        li.href = "#code-area";
        li.style.textAlign = "right";
        li.innerHTML = key;
        li.addEventListener('click', function(){
            document.getElementById("menu-section").childNodes.forEach(x => {
                if (x.className) {
                    x.classList.remove("btn-primary");
                }
            });
            this.className = "nav-item btn btn-primary";
            code.innerHTML = "";
            let pre = document.createElement("pre");
            code.appendChild(pre);
            pre.innerHTML = "   function " + answers[key].toString();
            let preInput = document.createElement("pre");
            let parameters = answers[key].toString().split('\n')[0].match(/\(.*\)/)[0].replace("(", "").replace(")", "");
            preInput.innerHTML = parameters;

            if (parameters) {
                if (timer) {
                    clearInterval(timer);
                }
                txtOutput.value = "";
                document.getElementById("input-section").style.display = "block";
                hint.innerHTML = "";
                btnRun.innerHTML = "Run Function " + key;
                hint.appendChild(preInput);
            } else {
                txtOutput.value = "";
                document.getElementById("input-section").style.display = "none";
                answers[key]();
            }

        });
        menuSection.appendChild(li);
    }
    run.addEventListener("click", function () {

        try {
            let key = this.innerHTML.split(' ')[2];
            let expectedParameters = answers[key].toString().split('\n')[0].match(/\(.*\)/)[0].replace("(", "").replace(")", "").split(",");
            let enterParameters = txtInput.value.trim().split('\n');
            if (expectedParameters.length !== enterParameters.length) {
                alert("Number of expected parameters is " + expectedParameters.length + " but you have entered " + enterParameters.length + " parameters.");
                return;
            }
            let inputValue = '{' + enterParameters.map((element, i) => '"param' + i + '":' + element).join(",") + '}';
            console.log(inputValue);
            let args = JSON.parse(inputValue);

            let ans = answers[key].apply(this, Object.values(args));
            txtOutput.value = ans;
            console.log(ans);
        } catch (err) {
            alert(err);
        }
    });
    console.log(menuSection.firstElementChild.click());
};
