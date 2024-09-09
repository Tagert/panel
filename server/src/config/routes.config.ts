import type { Express } from 'express';

export const configRoutes = (app: Express) => {
  //   app.use(example);

  app.use((req, res) => {
    return res.status(404).json({ status: 'Endpoint does not exist' });
  });
};
