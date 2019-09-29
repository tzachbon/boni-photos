import express from 'express';
import { ContactController } from '../controller/contact.controller';


export const ContactRouter = express.Router();

ContactRouter.post('/', ContactController);
