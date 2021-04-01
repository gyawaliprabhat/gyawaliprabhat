/*jshint esversion: 6 */
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
        let regex = /[aeiou]/;
        let i = 0;
        while (i < str.length) {
            if (regex.test(str[i])) {
                break;
            }
            i++;
        }
        return `${str.substring(i, str.length)}${str.substring(0, i)}ay`;

    }
    function biggerDecoration(size) {
        return function () {
            if (timer) {
                clearInterval(timer);
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

