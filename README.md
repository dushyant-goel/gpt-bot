## GPTBot

This is Charles Dickens' GPT Bot (or any other personality you fancy).
It responds to user chats in style of Charles Dickens.

### How to use?
Create a file `.env` in root of the project and add line:

`API_KEY=<Your OpenAI API key>`

Then, the usual:
```
npm install
npm start
```

The server is listening on `http://localhost:3000`
Chat is on /api/generate

See file `/routes/api.js` for API routes.

### To Do : 
Integrate voice prompts.
