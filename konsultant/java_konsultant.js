// Pobieramy elementy z DOM
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Funkcja do dodawania wiadomości
function addMessage(message, isUserMessage = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (isUserMessage) {
        messageElement.classList.add('user-message');
    }
    messageElement.textContent = message;

    // Wstaw nową wiadomość na koniec kontenera
    chatMessages.appendChild(messageElement);

    // Przewiń chat w dół, aby pokazać najnowsze wiadomości
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Przykładowe wiadomości początkowe
addMessage('Hej byczku. Co się stało?');
addMessage('Skąd nagle zwątpienie? Będzie dobrze... Trzymaj się tam');

// Obsługa przycisku "Wyślij"
sendButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        addMessage(messageText, true);
        messageInput.value = '';
    }
});

// Obsługa klawisza Enter
messageInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

