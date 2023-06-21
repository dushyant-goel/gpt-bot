const express = require('express');
const axios = require('axios')
const { Configuration, OpenAIApi } = require('openai');

const router = express.Router();

const configuration = new Configuration({
  organization: process.env.ORG,
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

let messages = [
  {role: 'system', content: 'Respond in style of The Economist.'},
  {role: 'user', content: 'Cyril Ramaphosa has been elected the president of South Africa for a second term.'},
]

router.get('/generate', async (req, res) => {
  
  try {
    const chatGPT = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      "temperature": 1,
      "top_p": 1,
      "n": 1,
      "stream": false,
      "max_tokens": 250,
      "presence_penalty": 0,
      "frequency_penalty": 0,
      messages,
    })
        
    const chatGPTMessage = chatGPT.data.choices[0].message.content;
    console.log(chatGPTMessage);
    
    res.render('index', {content: chatGPTMessage});

  } catch (error) {
    console.error(error);
    res.status(500).send('Error occured');

  }

});

/* OpenAI APIs */
// router.get('/generate', async (req, res) => {

//   try {
//     const response = await axios.post(`${baseURL}/chat/completions`,
//       {
//         "model": "gpt-3.5-turbo",
//         "messages": [
//           {
//             "role": "system",
//             "content": "You are Amitabh Bachchan"
//           },
//           {
//             "role": "user",
//             "content": "I loved your film Shahenshah, can you repeat your most famous dialogue from it."
//           }
//         ],
//         "temperature": 1,
//         "top_p": 1,
//         "n": 1,
//         "stream": false,
//         "max_tokens": 250,
//         "presence_penalty": 0,
//         "frequency_penalty": 0
//       }, {
//       headers: {
//         'Authorization': 'Bearer <token>',
//         'Content-Type': 'application/json'
//       }
//     });

//     // Handle the API response
//     generatedText = response.data.choices[0].message.content;

//   } catch (error) {
//     // Handle any erros
//     console.error(error);
//     res.status(500).send('Error occured');
//   }

// });

module.exports = router; 