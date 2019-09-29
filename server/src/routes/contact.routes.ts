import express from 'express';
import { ContactController } from '../controller/contact.controller';


const ContactRouter = express.Router();

ContactRouter.post('/', ContactController);

export default ContactRouter;
