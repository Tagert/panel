import { throwError } from '../utils/throw-error';
import { validateEnvs } from '../utils/validate-env';

const { PORT, MONGO_CONNECTION, JWT_SECRET, JWT_EXPIRATION, DB_NAME } = process.env;

const requiredEnvs = {
  PORT,
  JWT_SECRET,
  JWT_EXPIRATION,
  MONGO_CONNECTION,
  DB_NAME,
};

validateEnvs(requiredEnvs);

export const config = {
  server: {
    port: PORT ?? '5000',
  },
  jwt: {
    secret: JWT_SECRET ?? throwError('JWT_SECRET is required'),
    expiration: JWT_EXPIRATION ?? '3600',
  },
  db: {
    connection: MONGO_CONNECTION ?? throwError('MONGO_CONNECTION is required'),
    name: DB_NAME ?? 'myApp',
  },
};
