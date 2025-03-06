function toggleChat() {
    const chatbotWindow = document.querySelector('.chatbot-window');
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    if (message) {
        const chatbotMessages = document.getElementById('chatbot-messages');
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${message}`;
        chatbotMessages.appendChild(userMessage);

        // Simulate a response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.textContent = `Bot: I received your message: "${message}"`;
            chatbotMessages.appendChild(botMessage);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 1000);

        input.value = '';
    }
}