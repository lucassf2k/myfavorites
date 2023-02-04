require('dotenv').config();
const express = require('express');

const { router: routes } = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.NODE_PORT, () => console.log('🚀 Server is running on http://localhost:3333'));
