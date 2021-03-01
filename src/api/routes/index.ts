import express, { Router } from 'express';
import UserRoutes from './users';

const router = Router();

UserRoutes(router);

export default router;
