import mongoose from 'mongoose';
import { Entity } from './shared/globals.type';

export enum UserRole {
  admin = 'admin',
  manager = 'manager',
  employee = 'employee',
  client = 'client',
}

export type UserBody = {
  name: string;
  last_name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  phone_number: string;
  contact_email: string;
  city: string;
  address: string;
  birthday: Date;
  role: UserRole;
  favorites: [string];
};

export type UserType = UserBody & Entity;

export type UserModel = mongoose.Model<UserType>;
