'use strict'
$(document).ready(function() {

    $('#submit').on("click", function() {
        var keyword = $('#query').val();
        console.log(keyword);

        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&format=json&callback=?";

        $.ajax({
            dataType: "jsonp",
            type: "GET",
            url: url,
            async: true,
            success: function(data) {
                console.log(data);
            }
        });
    })


});
