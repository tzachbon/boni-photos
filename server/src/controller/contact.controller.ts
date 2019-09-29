import { RequestHandler } from 'express';
import { responseHelper } from '../util/response.util';


export const ContactController: RequestHandler = async (req, res, next) => {
  console.log('====================================');
  console.log(req);
  console.log('====================================');

  res.json(responseHelper({
    req
  }));

}
