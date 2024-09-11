import express from 'express';
import { SIGN_UP } from '../controllers/user/index';

export const userRoutes = express.Router();

userRoutes.post('/register', SIGN_UP);
