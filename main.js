$("#search").click(function () {
    console.log(('#query').text)
    if($('#query').val() == 'prawniczka123') {
        window.location.href = 'https://usosweb.usos.pw.edu.pl/kontroler.php?_action=news/default';
    } else {
        window.location.href = 'https://www.google.com/search?q=' + $('#query').val();
    }
})


