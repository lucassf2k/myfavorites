require('dotenv').config();
const express = require('express');

const app = express();

app.listen(process.env.NODE_PORT, () => console.log('🚀 Server is running on http://localhost:3333'));
