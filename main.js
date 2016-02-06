if (jQuery == null) throw "JQuery not loaded";

$(document).ready(function() {
    $('body')
        .append('<table id="game-field">@</table'
            .replace('@', '<tr>@</tr>'
                .replace('@', '<td></td>'
                    .repeat(7))
                .repeat(7)));
});
