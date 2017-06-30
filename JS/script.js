//autocomplete seach bar

$("#search_bar").autocomplete({
    source: function (request, response) {
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                'action': "opensearch",
                'format': "json",
                'search': request.term
            },
            success: function (data) {
                $('#links').empty();
                link_generator(data);
            }
        });
    }
});

//link generator

function link_generator(data) {
    var i = 0;
    title = data[1];
    description = data[2];
    link = data[3];

    for (i; i < data[3].length; i++) {
        var link_list = '<a target="_blank" href="' + link[i] + '">' + title[i] + '</a>';
        var description_list = '<li>' + link_list + '<br><p>' + description[i] + '</p><hr></li>';

        $('#links').append(description_list);
    }
}
