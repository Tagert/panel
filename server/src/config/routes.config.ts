import type { Express } from 'express';
import { userRoutes } from '../routes/user.routes';

export const configRoutes = (app: Express) => {
  app.use(userRoutes);

  app.use((req, res) => {
    return res.status(404).json({ status: 'Endpoint does not exist' });
  });
};
