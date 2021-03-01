/* eslint-disable no-unused-vars */
import { Express, Request, Response, Router } from 'express';

declare global {
  type Handler = (request: Request, response: Response) => void;
  interface UserController {
    getUsers: Handler;
    addUser: Handler;
    getUser: Handler;
    updateUser: Handler;
    deleteUser: Handler;
  }
  type RouteFunction = (router: Router, controllers: UserController) => void;
}
