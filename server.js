const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/api/', async (req, res) => {
  console.log('proxy GET request heard');
  const { search } = req.query;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
  };
  const config = {
    method: 'get',
    url: 'https://api.spoonacular.com/recipes/complexSearch',
    params: {
      query: `${search}`,
      number: 100,
      apiKey: '66c6570115c141a29a7662650cd11fb9',
    },
  };

  try {
    const response = await axios(config);
    res.status(200).json({ data: response.data.results });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
