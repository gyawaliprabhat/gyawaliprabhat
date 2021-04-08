/**
 * minibankapp.js
 */
/*jshint esversion:6 */
$(function () {
    "use strict";
    const tblRecords = [{ strAccountNo: "01-980-0001", 
                        strCustomerName: "James H. Karvill", 
                        strAccountType: "Savings" 
                    },
                     { strAccountNo: "01-980-0002", 
                     strCustomerName: "Anna Hernandez-Diaz", 
                     strAccountType: "Checking" 
                    }];
                    
    $("#formNewAccount").submit(function (event) {
        event.preventDefault();
        const txtAccountNo = $("#txtAccountNo");
        const txtCustomerName = $("#txtCustomerName");
        const ddlAccountType = $("#ddlAccountType");
        const strAccountNo = txtAccountNo.val();
        const strCustomerName = txtCustomerName.val();
        const strAccountType = ddlAccountType.val();
        const data = { strAccountNo, strCustomerName, strAccountType };
        insertNewAccount(data);
        txtAccountNo.val("");
        txtCustomerName.val("");
        ddlAccountType.val("");
    });

    function insertNewAccount(accountInfo) {
        tblRecords.push(accountInfo);
        const filteredCheckedList = getCheckedAccountType();
        if (filteredCheckedList.length === 0 || filteredCheckedList.indexOf(accountInfo.strAccountType) !== -1) {
            filterItemsOnList();
        }
    }

    $("#ddlAccountType option").each(function (index, element) {
        if (element.value) {
            const label = $("<label>", { text: element.value, css: { "float": "right" } });
            const checkbox = $("<input>", { type: "checkbox", name: "accountType", id: element.value });
            checkbox.bind("click", filterItemsOnList);
            label.prepend(checkbox);
            $("#tblAccounts caption").append(label);
        }
    });
    function getCheckedAccountType() {
        let arr = [];
        $("[name='accountType']").each(function (i, element) {
            if ($(element).prop("checked")) {
                arr.push($(element).attr("id"));
            }
        });
        return arr;
    }

    function filterItemsOnList() {
        let arr = getCheckedAccountType();
        if (arr.length > 0) {
            reloadTable(tblRecords.filter(x => arr.indexOf(x.strAccountType) !== -1));
        } else {
            reloadTable(tblRecords);
        }
        return arr;
    }

    const reloadTable = function (records) {
        $("#tblAccounts tbody").empty();
        $.each(records, function (i, row) {
            addNewAccountDataRow(row, i + 1);
        });
        const footerText = `Showing ${records.length} of ${tblRecords.length} records.`;
        $("#tblAccounts tbody").append($("<tr>").append($("<td>", { css: { "text-align": "center" }, text: footerText, "colspan": "4" })));


    };

    const addNewAccountDataRow = function (data, i) {
        const tblAccounts = $("#tblAccounts tbody");
        const tr = $("<tr>");
        tr.append($("<td>", { text: i }));
        $.each(data, function (key, value) {
            const td = $("<td>", { text: value });
            tr.append(td);
        });
        tblAccounts.append(tr);
    };
    reloadTable(tblRecords);

});
