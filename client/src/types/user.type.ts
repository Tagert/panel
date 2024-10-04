import { MongooseEntity } from "./shared/types";

export enum UserRole {
  admin = "admin",
  manager = "manager",
  employee = "employee",
  client = "client",
}

export type UserPayloadType = {
  id: string;
};

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
  favorites: string[];
};

export type LoginUserResponse = Omit<UserBodyType, "password"> & UserPayloadType;

export type LoginResponseType = {
  status: string;
  token: string;
  user: LoginUserResponse;
};

export type UserType = MongooseEntity & UserPayloadType & UserBodyType;
