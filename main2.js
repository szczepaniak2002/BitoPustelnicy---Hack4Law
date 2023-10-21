$('#search').on('click', function() {
    console.log('hello')
    var updateData = {
        text: $('#query').val(),
        from_user_id: '3',
        to_user_id: '2'
    };
    $.ajax({
        type: 'POST',
        url: 'http://localhost/zapis_message.php',
        data: updateData,
        dataType: "json",
        encode: true,
        }).done(function (data) {
            console.log('hello again')
        })

})

function get_messages() {
    console.log('hello')
    $.ajax({
        type: 'POST',
        url: 'http://localhost/getmessages.php',
        data: {},
        dataType: "json",
        encode: true,
        }).done(function (data) {
            console.log(data.data)
        })
    }
    
window.onload = get_messages



