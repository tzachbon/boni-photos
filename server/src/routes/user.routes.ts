import express from 'express';
import { UserController } from '../controller/user.controller';


const UserRouter = express.Router();

UserRouter.get('/', UserController);


export default UserRouter;
