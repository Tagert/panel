/* eslint-disable no-console */
import type { Express } from 'express';
import { config } from './env.config';
import { configRoutes } from './routes.config';
import { connectToDatabase } from './db.config';
import path from 'path';

export const startServer = async (server: Express) => {
  try {
    await connectToDatabase();
    configRoutes(server);

    server.get('*', (_, res) => {
      res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
    });

    server.listen(config.server.port, () => {
      console.log(`Express started on http://localhost:${config.server.port}`);
      console.log(`Swagger UI available at http://localhost:${config.server.port}/api-docs`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};
