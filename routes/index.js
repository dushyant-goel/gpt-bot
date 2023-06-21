const express = require('express');
const router = express.Router();

messages= []

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Economist GPT', messages: messages });
});

/* POST */
router.post('/', async (req, res) => {
  
  const { messages } = await req.json();
  console.log(messages);

  chatGPTMessage = {'role': 'assistant', 'content': 'hmm'};

  const response = { chatGPTmessage };
  res.json(response);
  
})

module.exports = router;
