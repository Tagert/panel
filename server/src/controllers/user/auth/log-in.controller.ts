import type { RequestHandler } from 'express';
import { UserModel } from '../../../models/user.model';
import { generateToken } from '../../../middlewares/generate-tokens';
import { handleError } from '../../../utils/handle-error';
import { comparePasswords } from '../../../utils/hash-password';

export const LOG_IN: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Unrecognized username or password' });
    }

    const isPasswordMatch = await comparePasswords(password, user.password);

    if (!isPasswordMatch) {
      return res.status(404).json({ message: 'Unrecognized username or password' });
    }

    const token = generateToken(user);

    const userWithoutPassword = await UserModel.findById(user._id).select('-password');

    return res.status(200).json({
      status: `Login successful`,
      token,
      user: userWithoutPassword,
    });
  } catch (err: unknown) {
    handleError(err, res, 'login');
  }
};
