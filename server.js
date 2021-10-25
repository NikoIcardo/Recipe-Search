const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/api/', async (req, res) => {
  console.log('proxy GET request heard');
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
  };
  const config = {
    method: 'get',
    url: 'http://www.recipepuppy.com/api/',
    params: {
      q: 'omelet',
    },
  };

  try {
    const response = await axios(config);
    console.log(response.data);
    //res.writeHead(200, headers).json({ response });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
