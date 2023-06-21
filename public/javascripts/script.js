const messageForm = document.getElementById('message-form')
const messageInput = document.getElementById('message-input')
const messageList = document.getElementById('message-list')

//messageForm.addEventListener("submit", async (event) => {
const messages = [
    { "role": "system", "content": "Respond in the voice of The Economist"},
];

async function chat(event) {

    // event.preventDefault();
    const userMessage = messageInput.value;
    messageInput.value = '';

    messages = [
        ...messages,
        {'role': 'user', 'content': userMessage}
    ];

    // Send the user's message to the server

    console.log(JSON.stringify({ 'role': 'user', content: userMessage }));

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


    // const userMessageElement = document.createElement('div');
    // userMessageElement.classList.add('user-message');
    // userMessageElement.textContent = userMessage.content;

    // messageList.append(userMessageElement);

}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('submit', handleFormSubmit);
});