

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function addMessage(message, isUserMessage = false) {
    var texts = [
        "Hack4law.",
        "Wiosenne kwiaty i rośliny.",
        "Słoneczna pogoda prognozowana już tej jesieni.",
        "Toyota Hilux, mistrz off-roadu.",
        "Politechnika Warszawska - rekrutacja.",
        "Analiza orzeczenia sądowego - na czym to polega?",
        "Polska mistrzem Polski - podsumowanie wyników polskiej kadry w piłce nożnej.",
        "Efektowne wykorzystanie html i JavaScript, poradnik młodego programisty."
    ];
    var links = [
        "https://example.com/Hack4law",
        "https://example.com/Wiosenne-kwiaty-i-rosliny",
        "https://example.com/Sloneczna-pogoda-prognozowana-juz-tej-jesieni",
        "https://example.com/Toyota-Hilux-mistrz-off-roadu",
        "https://example.com/Politechnika-Warszawska-rekrutacja",
        "https://example.com/Analiza-orzeczenia-sadowego-na-czym-to-polega",
        "https://example.com/Polska-mistrzem-Polski-podsumowanie-wynikow-polskiej-kadry-w-pilce-noznej",
        "https://example.com/Efektowne-wykorzystanie-html-i-JavaScript-poradnik-mlodego-programisty"
    ];
    
    const messagesDiv = document.createElement('div');
    messagesDiv.id = 'messages';

    const imgDiv = document.createElement('div');
    const userImg = document.createElement('img');
    
    imgDiv.appendChild(userImg);

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    var r = getRandomNumber(0, texts.length - 1);
    messageDiv.textContent = texts[r];

    const linkDiv = document.createElement('div');
    linkDiv.className = 'linktext';
    linkDiv.textContent = links[r];


    const randomTextDiv = document.createElement('div');
    randomTextDiv.id = 'randomtext';
    randomTextDiv.className = 'randomtextclass';
    randomTextDiv.textContent = message;

    messagesDiv.appendChild(imgDiv);
    messagesDiv.appendChild(messageDiv);
    messagesDiv.appendChild(linkDiv);
    messagesDiv.appendChild(randomTextDiv);

    
    if (isUserMessage) {
        userImg.className = 'telefon';
        userImg.src = 'tel.png';
        userImg.alt = 'Ikona telefonu';
    } else {
        userImg.className = 'znak';
        userImg.src = 'znak.png';
        userImg.alt = 'Ikona znaku zapytania';
    }
    document.getElementById('kontener').appendChild(messagesDiv);

}

var liczba_message = 0;

function get_messages() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost/getmessages.php',
        data: {},
        dataType: "json",
        encode: true,
        }).done(function (data) {
            var new_liczba_message = data.data.length;
            if(new_liczba_message != liczba_message) {
                liczba_message = new_liczba_message
                while (document.getElementById('kontener').firstChild) {
                    document.getElementById('kontener').removeChild(document.getElementById('kontener').firstChild);
                }
                for(i=0; i<data.data.length; i++) {
                    if(data.data[i].from_user_id == '2') {
                        addMessage(data.data[i].text1, true)
                    } else if(data.data[i].from_user_id == '3') {
                        addMessage(data.data[i].text1, false)
                    }
                }
            }

            
        })
    }

window.onload = get_messages

$('#search').on('click', function(){
    get_messages()
})

$(document).ready(function() {
    $("#query").keypress(function(event){
        if (event.which === 13) {
            console.log('wowow')
            $('#search').trigger("click")
            get_messages()
            $("#query").value = '';
          }
    })
});

setInterval(get_messages, 1000);


