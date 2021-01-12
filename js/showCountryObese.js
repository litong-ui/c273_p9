$(document).ready(function () {
    $("#idCountry").change(function () {
        var country_id = $("#idCountry").val();
        console.log(country_id);
        $.ajax({
            type: "GET",
            url: "http://localhost/C273/P09/getCountryDetails.php",
            //url: "getStudentsByModule.php",
            data: "id=" + country_id,
            cache: false,
            dataType: "JSON",
            success: function (response) {
                var message = "<thead><tr><th>Population</th><th>Obese</th></tr></thead>";
                message += "<tbody>";
                for (i = 0; i < response.length; i++) {
                    message += "<tr><td>" + response[i].population + "</td>"
                            + "<td>" + response[i].obese + "</td></tr>";
                }
                message += "</tbody>";
                $("#obeseTable").html(message);
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });
});