'use strict'
$(document).ready(function() {

    $('#submit').click(function() {
        var keyword = $('#query').val(),
            url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&format=json&callback=?";

        $.ajax({
            dataType: "jsonp",
            type: "GET",
            url: url,
            async: true,
            success: function(data) {
                var searched = data[0],
                    title = data[1],
                    description = data[2],
                    link = data[3],
                    results = [];

                for (var i = 0; i < title.length; i++) {
                    if (description[i] === "") {
                        description[i] = "No description available for this article.";
                    }

                    results.push('<a href="' + link[i] + '">' +
                        '<div class="entry">' +
                        '<h3 class="title">' + title[i] + '</h3>' +
                        '<p class="desc">' + description[i] + '</p>' +
                        '</div>' +
                        '<a>');
                }
                $('#results').html(results.join(""));

            }
        });
    })


});
