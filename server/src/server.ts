import express from 'express';
import 'dotenv/config';
import { configSwagger } from './config/swagger/swagger.config';
import { configMiddleware } from './config/middleware.config';
import { startServer } from './config/server.config';

const server = express();

configSwagger(server);
configMiddleware(server);

startServer(server)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Server started successfully.');
  })
  .catch(err => {
    console.error('Error starting the server:', err);
  });
