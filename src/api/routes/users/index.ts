import { Express, Router } from 'express';
import userControllers from '../../../User/controllers';

/** Routes */
// This Route retrieves the user list.
const getUsers: RouteFunction = (router, controllers) => {
  router.get('/users', controllers.getUsers);
};

// This route add a new user to the Database
const addUser: RouteFunction = (router, controllers) => {
  router.post('/users', controllers.addUser);
};

// This Route retrieves all the user data need it in the dashboard.
const getUser: RouteFunction = (router, controllers) => {
  router.get('/:user', controllers.getUser);
};

// This Route update the user data
const updateUser: RouteFunction = (router, controllers) => {
  router.patch('/:user', controllers.updateUser);
};

// This Route delete the user.
const deleteUser: RouteFunction = (router, controllers) => {
  router.delete('/:user', controllers.deleteUser);
};

export default (router: Router) => {
  getUsers(router, userControllers);
  addUser(router, userControllers);
  getUser(router, userControllers);
  updateUser(router, userControllers);
  deleteUser(router, userControllers);
};
