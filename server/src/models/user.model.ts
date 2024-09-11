import mongoose from 'mongoose';
import { UserRole, type UserType } from '../types/user.type';

const userSchema = new mongoose.Schema<UserType>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: false },
    phone_number: { type: String, required: false },
    contact_email: { type: String, required: false },
    city: { type: String, required: false },
    address: { type: String, required: false },
    birthday: { type: Date, required: false },
    role: { type: String, required: true, enum: Object.values(UserRole), default: UserRole.client },
    favorites: { type: [String], required: false, default: [] },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    versionKey: false,
  },
);

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  },
});

export const UserModel = mongoose.model<UserType>('users', userSchema);
