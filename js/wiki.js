'use strict'
$(document).ready(function() {

    $('#submit').on("click", function() {
      var input = $('#query').val();
      console.log(input);
    })

    /*
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        data: {
            action: 'query',
            list: 'search',
            srsearch: $("input[name=query]").val(),
            format: 'json'
        },
        dataType: 'jsonp',
        type: 'POST',
        headers: {
            'Api-User-Agent': 'Example/1.0'
        },
        success: function(data) {
            console.log(data);
        }
    });
    */
});
