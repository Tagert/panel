import jwt from 'jsonwebtoken';
import { config } from '../config/env.config';

type TokenPayloadType = {
  user_id: string;
};

const createToken = (payload: TokenPayloadType, secret: string, expiresIn: string) => {
  return jwt.sign(payload, secret, { expiresIn });
};

const createPayload = (user_id: string) => ({ user_id });

const generateToken = (secret: string, expiresIn: string) => (user_id: string) => {
  const payload = createPayload(user_id);
  return createToken(payload, secret, expiresIn);
};

export const generateJwt = generateToken(config.jwt.secret, config.jwt.expiration);
// export const generateRefreshJwt = generateToken(config.jwt_refresh.secret, config.jwt_refresh.expiration);
