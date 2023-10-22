// Pobieramy elementy z DOM
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatSelectorButtons = document.querySelectorAll('.chat-selector-button');
// Pobieramy elementy z DOM
const waitingCounter = document.getElementById('count');

let currentUser = 'user1'; // Domyślny użytkownik
let count = 12; // Początkowa wartość licznika

function updateCounter() {
    const random = Math.random(); // Losujemy liczbę z przedziału [0, 1]

    if (random < 0.5) {
        // Jeśli losowa liczba jest mniejsza niż 0.5, zwiększ liczbę
        count++;
    } else {
        // W przeciwnym razie zmniejsz liczbę
        count--;
    }

    waitingCounter.textContent = count;
}

// Uruchamiamy funkcję co 5 sekund
setInterval(updateCounter, 5000);



// Funkcja do wyczyszczenia localStorage
function clearLocalStorage() {
    localStorage.clear();
}

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

// Obsługa przycisków zmiany użytkownika
chatSelectorButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Usuń klasę "active" z innych przycisków
        chatSelectorButtons.forEach(b => b.classList.remove('active'));

        currentUser = button.getAttribute('data-user');
        chatMessages.innerHTML = ''; // Wyczyść poprzednie wiadomości

        // Dodaj klasę "active" do aktywnego przycisku
        button.classList.add('active');

        // Przykładowe wiadomości początkowe
        if (localStorage.getItem(currentUser)) {
            const userMessages = JSON.parse(localStorage.getItem(currentUser));
            userMessages.forEach(message => {
                addMessage(message.text, message.isUserMessage);
            });
        }
    });
});

// Obsługa przycisku "Wyślij"
sendButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        addMessage(messageText, true);

        // Zapisz nową wiadomość w localStorage
        const userMessages = JSON.parse(localStorage.getItem(currentUser) || '[]');
        userMessages.push({ text: messageText, isUserMessage: true });
        localStorage.setItem(currentUser, JSON.stringify(userMessages));

        // Wyczyść pole wiadomości
        messageInput.value = '';
    }
});

// Obsługa klawisza Enter
messageInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
