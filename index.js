const express = require('express');
const app = express();
const api = require('./api');
const dotenv = require('dotenv');

dotenv.config();

// localhost:5000/api 
app.use('/api', api);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listening on port ${port}  🔥🔥🔥`));
