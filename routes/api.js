const express = require('express');
const router = express.Router();
const axios = require('axios')

/* OpenAI APIs */
router.get('/generate', async (req, res) => {

  try {
    // const response = await axios.post(`https://api.openai.com/v1/chat/completions`,
    //   {
    //     "model": "gpt-3.5-turbo",
    //     "messages": [
    //       {
    //         "role": "system",
    //         "content": "You are Amitabh Bachchan"
    //       },
    //       {
    //         "role": "user",
    //         "content": "I loved your film Shahenshah, can you repeat your most famous dialogue from it."
    //       }
    //     ],
    //     "temperature": 1,
    //     "top_p": 1,
    //     "n": 1,
    //     "stream": false,
    //     "max_tokens": 250,
    //     "presence_penalty": 0,
    //     "frequency_penalty": 0
    //   }, {
    //   headers: {
    //     'Authorization': 'Bearer <token>',
    //     'Content-Type': 'application/json'
    //   }
    // });

    // Handle the API response
    // generatedText = response.data.choices[0].message.content;
    
    const apiKey = process.env.API_KEY;
    console.log(apiKey);
    res.send(apiKey);

  } catch (error) {
    // Handle any erros
    console.error(error);
    res.status(500).send('Error occured');
  }

});

module.exports = router; 