require('dotenv').config();
const express = require('express');

const { router: routes } = require('./routes');
const { errorHandler } = require('./app/helpers/errorHandler');

function main() {
  const app = express();

  app.use(express.json());
  app.use(routes);
  app.use(errorHandler);

  app.listen(
    process.env.NODE_PORT || 3333,
    () => console.log('🚀 Server is running on http://localhost:3333'),
  );
}
main();
