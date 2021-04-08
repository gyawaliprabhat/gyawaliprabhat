/*jshint esversion: 6 */
$(function () {
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        const txtEmail = $("#txtEmail");
        const txtPassword = $("#txtPassword");
        const txtUrl = $("#url");
        const chkIsChecked = $("#hasToBeRemembered");
        console.log("Email : " + txtEmail.val());
        console.log("Password : " + txtPassword.val());
        console.log("Url : " + txtUrl.val());
        console.log("Checkbox " + (chkIsChecked.prop("checked") ? " is Checked" : " Not Checked"));
    });

});