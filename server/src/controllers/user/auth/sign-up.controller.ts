import type { RequestHandler } from 'express';
import { UserModel } from '../../../models/user.model';
import { handleError } from '../../../utils/handle-error';
import { hashPassword } from '../../../utils/hash-password';
import { toUpperCase } from '../../../utils/to-upper-case';
import { userRegistrationSchema } from '../../../utils/validations/user-schema.validation';

export const SIGN_UP: RequestHandler = async (req, res) => {
  const { success, data, error } = userRegistrationSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({
      message: 'Invalid input',
      errors: error.format(),
    });
  }

  const { name, last_name, email, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    const user = new UserModel({
      name: toUpperCase(name),
      last_name,
      email,
      password: hashedPassword,
    });

    user.id = user._id.toString();

    const savedUser = await user.save();

    return res.status(201).json({
      user: savedUser,
      message: `User (${email}) was added successfully`,
    });
  } catch (err: unknown) {
    handleError(err, res, 'booking deletion');
  }
};
