const express = require('express');
const router = express.Router();

messages= []

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Charles Dickens GPT Chat', messages: messages });
});

/* POST */
router.post('/', async (req, res) => {
  
  const { messages } =  req.body;
  console.log(messages);

  chatDumbMessageContent = 'hmm.. please navigate to /api/generate'
  chatDumbMessage = {'role': 'assistant', 'content': chatDumbMessageContent};

  const response = chatGPTMessage ;
  res.json(response);
  
})

module.exports = router;
