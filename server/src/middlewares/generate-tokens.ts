import jwt from 'jsonwebtoken';
import { config } from '../config/env.config';

type TokenPayloadType = {
  id: string;
  email: string;
  role: string;
};

const createToken = (payload: TokenPayloadType, secret: string, expiresIn: string): string => {
  return jwt.sign(payload, secret, { expiresIn });
};

export const generateToken = (user: { id: string; email: string; role: string }): string => {
  const payload: TokenPayloadType = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  return createToken(payload, config.jwt.secret, config.jwt.expiration);
};
