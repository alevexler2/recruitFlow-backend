import { Request, Response } from 'express';

const {
  createUserService,
} = require('../services/User.service');

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, lastName, email, password } = req.body;
    const result = await createUserService(name, lastName, email, password);

    if (result.error) {
      res.status(400).json({ created: false, message: result.error });
    } else {
      res.status(201).json({ created: true, user: result.user });
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to create user', error: error });
  }
};

module.exports = {
  createUser,
};
