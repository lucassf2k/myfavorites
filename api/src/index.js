import('dotenv').config;
import express from 'express';

import { router } from './routes.js';
import { errorHandler } from './app/helpers/errorHandler.js';

function main() {
  const app = express();

  app.use(express.json());
  app.use(router);
  app.use(errorHandler);

  app.listen(
    process.env.NODE_PORT || 3333,
    () => console.log('🚀 Server is running on http://localhost:3333'),
  );
}
main();
