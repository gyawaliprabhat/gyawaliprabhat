/*jshint esversion: 6 */

/**
 * For Extra credit i have used the arrow function in the programming
 */
window.onload = function () {
    "use strict";
    const txtTextArea = document.getElementById("txtTextArea");
    const btnBigDecorate = document.getElementById("btnBigDecorate");
    const chkBling = document.getElementById("chkBling");
    const btnMalkovitch = document.getElementById("btnMalkovitch");
    const btnConvertText = document.getElementById("btnConvertText");
    const body = document.getElementsByTagName("body")[0];
    btnBigDecorate.onclick = biggerDecoration("12pt");
    var timer = null;

    btnMalkovitch.onclick = function () {
        const regex = /\S{5,}/gm;
        console.log(txtTextArea);
        txtTextArea.value = txtTextArea.value.replaceAll(regex, "Malkovich");
    };

    btnConvertText.onclick = function () {
        txtTextArea.value = convertText(txtTextArea.value);
    };

    function convertText(str) {
        let regex = /[aeiou]/; // using  regular expression to check vowel
        let i = 0;
        while (i < str.length) {
            if (regex.test(str[i])) { // go through each character and check either it is vowel or not
                break;  // if vowel is found then it breaks the loop.
            }
            i++;
        }
        /**
         * Here i tracks the location of the vowel so all the consonants before vowel are 
         * appended to the last. Also adding ay to the string if vowel found;
         */
        return `${str.substring(i, str.length)}${str.substring(0, i)}ay`; 
        

    }
    function biggerDecoration(size) {
        return function () {
            if (timer) {
                clearInterval(timer);  //clearing the timer if it is already set;
                timer = null;
                return;
            }
            let sizeInInt = parseInt(size);
            console.log(txtTextArea.style.fontSize);
            timer = setInterval(() => {
                sizeInInt += 2;
                txtTextArea.style.fontSize = sizeInInt + "pt";
            }, 500);

        };
    }
    chkBling.onchange = function (e) {
        if (e.currentTarget.checked) {
            body.style.backgroundImage = "url(hundred-dollar-bill.jpg)";
            body.style.backgroundSize = "100%";
            body.style.backgroundRepeat = "no-repeat";
            txtTextArea.style.fontWeight = "bold";
            txtTextArea.style.color = "green";
            txtTextArea.style.textDecoration = "underline";
        } else {
            body.style.removeProperty("background-image");
            txtTextArea.style.fontWeight = "normal";
            txtTextArea.style.color = "black";
            txtTextArea.style.textDecoration = "none";
        }
    };
};

