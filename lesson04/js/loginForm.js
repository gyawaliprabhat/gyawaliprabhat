window.onload = function(){
    // let input = Array.from(document.getElementsByTagName("input"));
    [..."hello"].sort()
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const txtUrl = document.getElementById("url");
    const chkIsChecked = document.getElementById("hasToBeRemembered");
    const btnSubmit = document.getElementById("submitBtn");
    btnSubmit.onclick = function(){
        let form = document.getElementsByName("loginForm")[0];
        if(!form.checkValidity()) {
            return;
        }
        console.log("Email : "+txtEmail.value);
        console.log("Password : "+ txtPassword.value);
        console.log("Url : " +txtUrl.value);
        console.log(chkIsChecked.checked? "Checked":"Not Checked");
    }
}