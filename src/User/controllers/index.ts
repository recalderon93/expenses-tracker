import { Request, Response } from 'express';
import getUsers from './getUsers';
import addUser from './addUser';
import getUser from './getUser';
import updateUser from './updateUser';
import deleteUser from './deleteUser';

const controllers: UserController = {
  getUser,
  getUsers,
  addUser,
  deleteUser,
  updateUser,
};

export default controllers;
