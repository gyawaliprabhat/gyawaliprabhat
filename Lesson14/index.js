/* jshint esversion:6 */
$(function () {
    const bookRecords = [];
    function BookInfo(bookId, isbn, title, overdueFee, publisher, datePublished) {
        this.bookId = bookId;
        this.isbn = isbn;
        this.title = title;
        this.overdueFee = overdueFee;
        this.publisher = publisher;
        this.datePublished = datePublished;
    }

    function showModal(title, message){
        $("#modalTitle").html(title);
        $("#modalBody").html(message);
        $("#stateInformationModal").modal("show");
    }

    function ajaxBeforeSend(){
		$("#spinner").removeClass("d-none");
        $("#onSubmit").prop('disabled', true);
	}

	function ajaxComplete(){
        $("#spinner").addClass("d-none");
		$("#spinner").hide();
        $("#onSubmit").prop('disabled', false);
	}

    $("#bookForm").submit(function (e) {
        e.preventDefault();
        let bookInfo = new BookInfo( $("#isbn").val(),$("#isbn").val(), $("#title").val(), parseFloat($("#overdueFee").val()), $("#publisher").val(), $("#datePublished").val());
        $.ajax({
            type: "POST",
            url: "https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
            data: JSON.stringify(bookInfo),
            contentType: 'application/json',
            beforeSend: ajaxBeforeSend,
            complete: ajaxComplete,
            success: function (bookData) {
                console.log(bookData);
                bookRecords.push(bookData);
                addNewAccountDataRow(bookData, bookRecords.length);
               // alert("Record Added Successfully...");
               showModal("<span class='text-success'>Success..</span>", "Record Successfully Added");
            },
            error: function (err) {
                //alert("Error Not Saved");
                showModal("<span class='text-danger'>Error..</span>", "Data Not Saved");
            }
        });
    });

    $.get("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list", function (bookInfo) {
        $.each(bookInfo, function (idx, value) {
            bookRecords.push(new BookInfo(value.bookId, value.isbn, value.title, value.overdueFee, value.publisher, value.datePublished));
        });
        reloadTable(bookRecords);
        console.log(bookRecords);
    });


    function reloadTable(records) {
        $("#tblRows").empty();
        $.each(records, function (i, row) {
            addNewAccountDataRow(row, i + 1);
        });
    }

    function addNewAccountDataRow(data, i) {
        const tblAccounts = $("#tblRows");
        const tr = $("<tr>");
        tr.append($("<td>", { text: i }));
        $.each(data, function (key, value) {
            if (key != "bookId") {
                const td = $("<td>", { text: value });
                tr.append(td);
            }
        });
        tblAccounts.append(tr);
    }

});