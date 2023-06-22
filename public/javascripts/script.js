const messageForm = document.getElementById('message-form')
const messageInput = document.getElementById('message-input')
const messageList = document.getElementById('message-list')

var messages = [
    { "role": "assistant", "content": "Respond in the voice of The Economist"},
];

messageForm.addEventListener("submit", async (event) => {
    
    event.preventDefault();
    const userMessageContent = messageInput.value;
    messageInput.value = '';
    
    messages = [
        ...messages,
        {'role': 'user', 'content': userMessageContent}
    ];
    
    // Send the user's message to the server
    
    console.log(JSON.stringify({ 'role': 'user', content: userMessageContent }));
    
    const res = await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages })
    });
    
    const chatGPTMessage = await res.json();    
    console.log(chatGPTMessage);
    
    messages = [
        ...messages,
        chatGPTMessage
    ]
    
    
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('user-message');
    userMessageElement.textContent = userMessageContent;
    
    const assistantMessageElement = document.createElement('div');
    assistantMessageElement.classList.add('assistant-message');
    assistantMessageElement.textContent = chatGPTMessage.content;
    
    console.log(messages);
});


// document.addEventListener('DOMContentLoaded', () => {
    //     document.addEventListener('submit', handleFormSubmit);
    // });
//});