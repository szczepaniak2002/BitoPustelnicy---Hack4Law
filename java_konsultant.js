const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

function addMessage(message, isUserMessage = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (isUserMessage) {
        messageElement.classList.add('user-message');
    }
    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// // Przykładowe wiadomości początkowe
// addMessage('Hej byczku. Co się stało? ;(');
// addMessage('Skąd nagle zwątpienie? Będzie dobrze... Trzymaj się tam');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        addMessage(messageText, true);
        messageInput.value = '';
            var updateData = {
                text: messageText,
                from_user_id: '2',
                to_user_id: '3'
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
    }
});

messageInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
// porzadne nazywanie zmiennych :) smacznej kawusi
var liczba_message = 0;

function get_messages() {
    console.log('hello')
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

                for(i=data.data.length - 1; i>=0; i--) {
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


