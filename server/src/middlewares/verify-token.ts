import jwt from 'jsonwebtoken';
import { UserPayloadType } from '../types/user.type';

export const verifyToken = (token: string, secret: string): Promise<UserPayloadType> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      resolve(decoded as UserPayloadType);
    });
  });
};
