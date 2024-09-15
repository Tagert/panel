import type { RequestHandler } from 'express';
import { config } from '../config/env.config';
import { verifyToken } from './verify-token';
import { UserPayloadType } from '../types/user.type';

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayloadType;
    }
  }
}

export const userAuth: RequestHandler = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = authorization.split(' ')[1];

    const payload = await verifyToken(token, config.jwt.secret);

    req.currentUser = payload;

    next();
  } catch (err) {
    console.error('Token verification failed:', err);
    return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
  }
};
