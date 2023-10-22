$("#lupka").click(function () {
    if($('#query').val() == 'haslo123') {
        window.location.href = 'SurfSeekOfiaraChat.html';
    } else {
        window.location.href = 'https://www.google.com/search?q=' + $('#query').val();
    }
})

$(document).ready(function() {
    $("#search-box").keypress(function(event){
        if (event.which === 13) {
            console.log('hejka')
            if($('#query').val() == 'haslo123') {
                window.location.href = 'SurfSeekChat.html';
            } else {
                window.location.href = 'https://www.google.com/search?q=' + $('#query').val();
            }
          }
    })
});
