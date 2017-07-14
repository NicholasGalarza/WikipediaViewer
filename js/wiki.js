'use strict'
$(document).ready(function () {

  $('.inputTab').hide();

  $('#search').click(function (e) {
    $('#search').toggle('highlight');
    $('#random').fadeOut(600);
    $('.button').fadeOut(600);
    $('#inputTab').append('<input id="query" type="text" name="Wikipedia"/>');
    $('#inputTab').append('<i id="house" class="fa fa-home fa-3x" aria-hidden="true"></i>');
    $('#house').click(function () {
      location.reload();
    });
    $('#query').keypress(function (e) { // or document.
      var keyCode = e.keyCode || e.which;
      if (keyCode == '13') {
        var keyword = $('#query').val(),
          url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&format=json&callback=?";

        $.ajax({
          dataType: 'jsonp',
          type: 'GET',
          url: url,
          async: true,
          success: function (data) {
            var searched = data[0],
              title = data[1],
              description = data[2],
              link = data[3],
              results = [];

            for (var i = 0; i < title.length; i++) {
              if (description[i] === '') {
                description[i] = "No description available for this article.";
              }

              if (title.length === 0) {
                results.push("No results were found for that search :(");
              }

              results.push('<a href="' + link[i] + '" target="_blank">' +
                '<div class="entry">' +
                '<h3 class="title">' + title[i] + '</h3>' +
                '<p class="desc">' + description[i] + '</p>' +
                '</div>' +
                '<a>');
            }
            $('#results').html(results.join(""));

          }
        }); // end of request.
      }
    }); // end of event
  });

  $('#random').click(function(e) {});

});
