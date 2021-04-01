/*jshint esversion: 6 */
window.onload = function () {
    const txtProductNo = document.getElementById("productNo");
    const txtName = document.getElementById("name");
    const txtUnitPrice = document.getElementById("unitPrice");
    const txtQuantity = document.getElementById("quantity");
    const selSupplier = document.getElementById("supplier");
    const txtDateSupplied = document.getElementById("dateSupplied");
    //const btnReset = document.getElementById("btnReset");
    //const btnCancel = document.getElementById("btnCancel");
    const btnAdd = document.getElementById("btnAdd");

    btnAdd.onclick = function () {
        alert(getLblVal([txtProductNo, txtName,txtUnitPrice,txtQuantity,selSupplier,txtDateSupplied]));
    };
    function getLblVal(elements){
        return elements.map(x=>  x.labels[0].innerHTML +" : " + x.value ).join("\n");
    }
};
