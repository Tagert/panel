import express from 'express';
import { SIGN_UP, LOG_IN } from '../controllers/user/index';

export const userRoutes = express.Router();

userRoutes.post('/register', SIGN_UP);
userRoutes.post('/login', LOG_IN);
