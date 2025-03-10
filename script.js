// Function to toggle the chatbot window
function toggleChat() {
    const chatbotWindow = document.querySelector('.chatbot-window');
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
}

// Function to send a message
function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();

    if (message) {
        // Display the user's message
        appendMessage('user', message);

        // Generate a response
        const response = generateResponse(message);

        // Display the chatbot's response after a short delay
        setTimeout(() => {
            appendMessage('chatbot', response);
        }, 500);

        // Clear the input field
        input.value = '';
    }
    
}

// Function to generate a response based on user input
function generateResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return 'Hello! How can I help you?';
    } else if (lowerCaseMessage.includes('how are you')) {
        return 'I am just a chatbot, but I am here to help you!';
    } else if (lowerCaseMessage.includes('bye')) {
        return 'Goodbye! Have a great day!';
    } else {
        return "I don't know how to respond to this.";
    }
}

// Function to append a message to the chat window
function appendMessage(sender, message) {
    const chatWindow = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);

    // Scroll to the bottom of the chat window
    chatWindow.scrollTop = chatWindow.scrollTop + messageElement.offsetHeight;
}
