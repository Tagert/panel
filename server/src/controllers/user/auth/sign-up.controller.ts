import type { RequestHandler } from 'express';
import { UserModel } from '../../../models/user.model';
import { handleError } from '../../../utils/handle-error';
import { validatePassword } from '../../../utils/validations/password.validation';
import { validateEmail } from '../../../utils/validations/email.validation';
import { hashPassword } from '../../../utils/hash-password';
import { toUpperCase } from '../../../utils/to-upper-case';

export const SIGN_UP: RequestHandler = async (req, res) => {
  try {
    const { name, last_name, email, password } = req.body;

    const hash = await hashPassword(password);

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    if (!emailValidation) {
      return res.status(400).json({ message: 'Please provide a properly formatted email address' });
    }

    if (passwordValidation !== true) {
      return res.status(400).json({ message: passwordValidation });
    }

    const isUserExist = await UserModel.findOne({ email });

    if (isUserExist) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    const user = new UserModel({
      name: toUpperCase(name),
      last_name,
      email,
      password: hash,
    });

    user.id = user._id.toString();

    const response = await user.save();

    return res.status(201).json({
      user: response,
      message: `User (${email}) was added successfully`,
    });
  } catch (err: unknown) {
    handleError(err, res, 'booking deletion');
  }
};
