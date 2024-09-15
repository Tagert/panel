import bcrypt from 'bcrypt';
import { config } from '../config/env.config';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(config.hash.salt);

  return await bcrypt.hash(password, salt);
};

export const comparePasswords = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
