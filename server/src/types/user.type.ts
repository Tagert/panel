import mongoose from 'mongoose';
import { Entity } from './shared/globals.type';

export type UserPayloadType = {
  id: string;
};

export enum UserRole {
  admin = 'admin',
  manager = 'manager',
  employee = 'employee',
  client = 'client',
}

export type UserBodyType = {
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

export type UserType = UserBodyType & Entity;

export type UserModel = mongoose.Model<UserType>;
