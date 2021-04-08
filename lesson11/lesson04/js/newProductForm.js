/*jshint esversion: 6 */
$(function () {
    $("#productForm").submit(function (event) {
        event.preventDefault();
        const txtProductNo = $("#productNo");
        const txtName = $("#name");
        const txtUnitPrice = $("#unitPrice");
        const txtQuantity = $("#quantity");
        const selSupplier = $("#supplier");
        const txtDateSupplied = $("#dateSupplied");
        let elementWithValue =  bindValueWithLabel([txtProductNo, txtName, txtUnitPrice, txtQuantity, selSupplier, txtDateSupplied]);
        console.log(elementWithValue);
        $(".column>div#showValues").remove();
        const divToShowValue = $("<div>", {"id": "showValues", "class":"display-records"});
        const ul = $("<ul>");
        $.each(elementWithValue, function(i, value){
            const li = $("<li>", {"text": value.label + " : " + value.value});
            ul.append(li);
        });
        divToShowValue.append(ul);
        $(".column").append(divToShowValue);


    });

    function bindValueWithLabel(elements) {
        return elements.map(x =>  Object.create({ 
            label: $(`label[for="${x.attr('id')}"]`).text(), 
            value: x.val()
        }));
    }
});