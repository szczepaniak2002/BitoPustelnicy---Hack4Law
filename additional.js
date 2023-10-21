

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
    while (document.getElementById('kontener').firstChild) {
        document.getElementById('kontener').removeChild(document.getElementById('kontener').firstChild);
    }
    
    const messagesDiv = document.createElement('div');
    messagesDiv.id = 'messages';

    const imgDiv = document.createElement('div');
    const userImg = document.createElement('img');
    
    imgDiv.appendChild(userImg);

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = texts[getRandomNumber(0, texts.length - 1)];

    const br1 = document.createElement('br');
    const br2 = document.createElement('br');
    const br3 = document.createElement('br');
    const br4 = document.createElement('br');

    const randomTextDiv = document.createElement('div');
    randomTextDiv.id = 'randomtext';
    randomTextDiv.className = 'randomtextclass';
    randomTextDiv.textContent = message;

    messagesDiv.appendChild(imgDiv);
    messagesDiv.appendChild(messageDiv);
    messagesDiv.appendChild(br1);
    messagesDiv.appendChild(br2);
    
    messagesDiv.appendChild(randomTextDiv);
    messagesDiv.appendChild(br3);
    messagesDiv.appendChild(br4);

    
    if (isUserMessage) {
        userImg.className = 'telefon';
        userImg.src = 'tel.jpg';
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
setInterval(get_messages, 1000);


